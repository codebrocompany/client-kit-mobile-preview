(function () {
  const doc = document.querySelector('.document');
  if (!doc) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const draftKey = 'codebro-client-draft-v2:' + (location.pathname.includes('invoice') ? 'invoice' : 'client-agreement');
  let savedDraftVersion = 0;
  function cleanHtml(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    template.content.querySelectorAll('script,iframe,object,embed,form,link,meta').forEach(node => node.remove());
    template.content.querySelectorAll('.placeholder-pending,.selected-unit').forEach(node => node.classList.remove('placeholder-pending', 'selected-unit'));
    template.content.querySelectorAll('*').forEach(node => {
      for (const attribute of [...node.attributes]) if (/^on/i.test(attribute.name) || /^(src|href)$/i.test(attribute.name) && /^(javascript:|data:text\/html)/i.test(attribute.value)) node.removeAttribute(attribute.name);
    });
    return template.innerHTML;
  }
  try {
    const saved = JSON.parse(localStorage.getItem(draftKey) || 'null');
    if (saved?.html) { doc.innerHTML = cleanHtml(saved.html); savedDraftVersion = saved.schemaVersion || 1; }
  } catch (error) { console.warn('Could not restore draft', error); }
  if (location.pathname.includes('invoice') && savedDraftVersion < 2 && !doc.querySelector('.signature-grid')) {
    const section = document.createElement('div');
    section.className = 'section signature-section';
    section.innerHTML = '<div class="section-heading">Authorization (optional)</div><div class="signature-grid"><div><div class="section-heading">Authorized Signatory</div><div class="signature-line"></div><div class="field-label">Signature</div><div class="field-label">Printed Name</div><div class="field-value placeholder">[NAME / TITLE]</div><div class="field-label">Date</div><div class="field-value placeholder">[DD Month YYYY]</div></div></div>';
    doc.insertBefore(section, $('.doc-footer', doc));
  }
  doc.querySelectorAll('.selected-unit').forEach(node => node.classList.remove('selected-unit'));
  const toast = message => {
    let bar = $('#kit-toast');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'kit-toast';
      bar.style.cssText = 'position:fixed;bottom:18px;left:50%;transform:translateX(-50%);z-index:200;background:#c9a84c;color:#18140c;padding:9px 14px;border-radius:3px;font:600 12px system-ui';
      document.body.append(bar);
    }
    bar.textContent = message;
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => bar.remove(), 3300);
  };

  // Replace the source template's nested delete controls with one control per
  // meaningful unit. A label and its value always move together.
  doc.querySelectorAll('.del-btn,.unit-remove').forEach(button => button.remove());
  doc.querySelectorAll('.section-heading,.field-label,.doc-title,.invoice-title,.doc-subtitle,.clause-num,.footer-page,.doc-table th,.totals-row>span:not(.totals-amount),.logo-block span').forEach(node => {
    node.contentEditable = 'true';
    node.spellcheck = false;
  });
  const removedItems = [];
  let selectedUnit = null;
  function selectUnit(unit) {
    if (selectedUnit === unit) return;
    selectedUnit?.classList.remove('selected-unit');
    selectedUnit = unit;
    selectedUnit?.classList.add('selected-unit');
  }
  function cross(target, label, holder = target) {
    target.classList.add('removable-unit');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'unit-remove';
    button.textContent = '×';
    button.setAttribute('aria-label', `Remove ${label}`);
    button.title = `Remove ${label} (Undo to restore)`;
    button.contentEditable = 'false';
    holder.append(button);
  }
  function wrapUnit(node, name, label) {
    let unit = node.parentElement;
    if (!unit.classList.contains(name)) {
      unit = document.createElement('div');
      unit.className = name;
      node.before(unit);
      unit.append(node);
    }
    cross(unit, label);
    return unit;
  }
  const signatureHeading = [...doc.children].find(node => node.classList?.contains('section-heading') && node.textContent.trim() === 'Signatures');
  if (signatureHeading) {
    const section = document.createElement('div');
    section.className = 'section signature-section';
    const body = signatureHeading.nextElementSibling;
    const grid = body?.nextElementSibling;
    signatureHeading.before(section);
    section.append(signatureHeading);
    if (body) section.append(body);
    if (grid) section.append(grid);
  }
  for (const label of doc.querySelectorAll('.field-label')) {
    const existing = label.closest('.field-pair');
    if (existing) { cross(existing, `${label.textContent.trim()} field`); continue; }
    const next = label.nextElementSibling;
    const previous = label.previousElementSibling;
    const pair = label.parentElement.classList.contains('custom-field') ? label.parentElement : document.createElement('div');
    if (pair !== label.parentElement) { pair.className = 'field-pair'; label.before(pair); }
    else pair.classList.add('field-pair');
    if (next && (next.classList.contains('field-value') || next.classList.contains('placeholder'))) pair.append(label, next);
    else if (previous?.classList.contains('signature-line')) pair.append(previous, label);
    else pair.append(label);
    cross(pair, `${label.textContent.trim()} field`);
  }
  doc.querySelectorAll('.section').forEach(section => {
    const heading = [...section.children].find(node => node.classList?.contains('section-heading'));
    if (heading) cross(section, `${heading.textContent.trim()} section`);
  });
  doc.querySelectorAll('.two-col > div > .section-heading,.signature-grid > div > .section-heading,.heading-unit > .section-heading').forEach(heading => {
    wrapUnit(heading, 'heading-unit', `${heading.textContent.trim()} heading`);
  });
  doc.querySelectorAll('.scope-list li,.clause-list li').forEach(item => cross(item, 'list item'));
  doc.querySelectorAll('.doc-table').forEach(table => {
    if (!table.parentElement.classList.contains('table-scroll')) {
      const scroller = document.createElement('div');
      scroller.className = 'table-scroll';
      table.before(scroller);
      scroller.append(table);
    }
    const heading = table.querySelector('thead tr');
    if (heading && !heading.querySelector('.row-action')) {
      const cell = document.createElement('th');cell.className = 'row-action';heading.prepend(cell);
    }
    table.querySelectorAll('tbody tr').forEach(row => {
      let cell = row.querySelector(':scope > .row-action');
      if (!cell) { cell = document.createElement('td');cell.className = 'row-action';row.prepend(cell); }
      cross(row, 'service row', cell);
    });
  });
  doc.querySelectorAll('.totals-row').forEach(row => cross(row, `${row.firstElementChild?.textContent.trim() || 'total'} row`));
  doc.querySelectorAll('.logo-block,.logo-sub,.doc-title,.invoice-title,.doc-subtitle,.footer-brand,.footer-page,.body-text').forEach(node => {
    wrapUnit(node, 'text-unit', node.textContent.trim().slice(0, 40) || 'text block');
  });
  doc.querySelectorAll('.notes-section > .field-value').forEach(node => wrapUnit(node, 'text-unit', 'notes'));
  function mediaSlot(kind) {
    const slot = document.createElement('div'), image = document.createElement('img'), controls = document.createElement('div');
    slot.className = `media-slot media-${kind}`;slot.dataset.mediaKind = kind;
    image.className = 'media-preview';image.alt = kind === 'stamp' ? 'Company stamp' : 'Signature';image.hidden = true;
    controls.className = 'media-actions';
    for (const [action, label] of [['media-upload', `Add ${kind}`], ['media-remove', 'Remove']]) {
      const button = document.createElement('button');button.type = 'button';button.className = action;button.textContent = label;
      if (action === 'media-remove') button.hidden = true;controls.append(button);
    }
    slot.append(image, controls);return slot;
  }
  function syncMediaSlot(slot) {
    const filled = !!$('.media-preview', slot).getAttribute('src');
    slot.classList.toggle('has-image', filled);$('.media-preview', slot).hidden = !filled;
    $('.media-upload', slot).textContent = `${filled ? 'Change' : 'Add'} ${slot.dataset.mediaKind}`;
    $('.media-remove', slot).hidden = !filled;
  }
  doc.querySelectorAll('.signature-grid > div').forEach((box, index) => {
    const line = $('.signature-line', box);
    if (!line) return;
    if (!$('.media-signature', box)) line.append(mediaSlot('signature'));
    if (index === 0 && !$('.media-stamp', box)) line.after(mediaSlot('stamp'));
  });
  doc.querySelectorAll('.media-slot').forEach(syncMediaSlot);
  function refreshLayout() {
    doc.querySelectorAll('.section-card,.callout').forEach(card => card.classList.toggle('is-empty', !card.querySelector('.field-pair')));
  }
  function undoRemoval() {
    const item = removedItems.pop();
    if (!item) { toast('Nothing to restore.'); return; }
    item.parent.insertBefore(item.node, item.next?.parentNode === item.parent ? item.next : null);
    refreshLayout();
    toast('Restored.');
  }
  function selectPlaceholder(node) {
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  doc.addEventListener('click', event => {
    const upload = event.target.closest('.media-upload'), removeMedia = event.target.closest('.media-remove');
    if (upload) { activeMediaSlot = upload.closest('.media-slot');$('#media-input')?.click();return; }
    if (removeMedia) { const slot = removeMedia.closest('.media-slot');$('.media-preview', slot).removeAttribute('src');syncMediaSlot(slot);toast('Image removed. Save Edits to keep this change.');return; }
    const button = event.target.closest('.unit-remove');
    if (!button) {
      if (event.target.closest('.add-field-button')) return;
      selectUnit(event.target.closest('.removable-unit'));
      const placeholder = event.target.closest('[contenteditable="true"].placeholder-pending');
      if (placeholder) selectPlaceholder(placeholder);
      return;
    }
    const unit = button.closest('.removable-unit');
    if (!unit) return;
    selectUnit(null);
    removedItems.push({ node: unit, parent: unit.parentNode, next: unit.nextSibling });
    unit.remove();
    refreshLayout();
    toast('Removed. Tap Undo to restore.');
  });
  document.addEventListener('click', event => {
    if (!doc.contains(event.target)) selectUnit(null);
  });
  $('#undo-button')?.addEventListener('click', undoRemoval);
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z' && !event.target.closest?.('[contenteditable="true"]') && removedItems.length) {
      event.preventDefault();undoRemoval();
    }
  });
  refreshLayout();
  doc.addEventListener('focusin', event => {
    const node = event.target;
    if (node.closest('.removable-unit')) selectUnit(node.closest('.removable-unit'));
    if (node.contentEditable !== 'true') return;
    const text = node.textContent.trim();
    if (node.children.length === 0 && /^\[[\s\S]+\]$/.test(text)) {
      node.dataset.placeholder = text;
      node.classList.add('placeholder-pending');
      selectPlaceholder(node);
    }
  });
  doc.addEventListener('focusout', event => event.target.classList?.remove('placeholder-pending'));
  doc.addEventListener('beforeinput', event => {
    const node = event.target;
    if (!node.matches?.('[contenteditable="true"].placeholder-pending') || !event.inputType?.startsWith('insert')) return;
    const value = event.data ?? event.dataTransfer?.getData('text/plain');
    if (value == null || !event.cancelable) { selectPlaceholder(node); return; }
    event.preventDefault();
    node.textContent = value;
    node.classList.remove('placeholder-pending', 'placeholder');
    const range = document.createRange();
    range.selectNodeContents(node);
    range.collapse(false);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    node.dispatchEvent(new Event('input', { bubbles: true }));
  });
  doc.addEventListener('input', event => event.target.classList?.remove('placeholder-pending'));

  function makeField() {
    const wrap = document.createElement('div');
    wrap.className = 'custom-field field-pair';
    const label = document.createElement('div');
    label.className = 'field-label placeholder';
    label.dataset.custom = 'true';
    label.contentEditable = 'true';
    label.dataset.placeholder = '[FIELD LABEL]';
    label.textContent = '[FIELD LABEL]';
    const value = document.createElement('div');
    value.className = 'field-value placeholder';
    value.contentEditable = 'true';
    value.dataset.placeholder = '[ENTER DETAILS]';
    value.textContent = '[ENTER DETAILS]';
    wrap.append(label, value);
    cross(wrap, 'custom field');
    return wrap;
  }
  function addFieldButton(section) {
    $('.add-field-button', section)?.remove();
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'add-field-button';
    button.textContent = '+ Field';
    button.addEventListener('click', () => {
      const field = makeField();
      section.insertBefore(field, button);
      field.firstElementChild.focus();
      toast('Field added.');
    });
    section.append(button);
  }
  doc.querySelectorAll('.section').forEach(addFieldButton);
  $('#add-section-button')?.addEventListener('click', () => {
    const section = document.createElement('div');
    section.className = 'section';
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    heading.dataset.custom = 'true';
    heading.contentEditable = 'true';
    heading.dataset.placeholder = '[NEW SECTION]';
    heading.textContent = '[NEW SECTION]';
    section.append(heading, makeField());
    cross(section, 'new section');
    addFieldButton(section);
    doc.insertBefore(section, $('.doc-footer', doc));
    heading.scrollIntoView({ block: 'center' });
    heading.focus();
    toast('Section added.');
  });

  const logo = $('.company-logo', doc);
  const logoButton = $('#logo-button');
  const logoInput = $('#logo-input');
  function showRemoveLogo() {
    let button = $('#remove-logo-button');
    if (!button) {
      button = document.createElement('button');
      button.id = 'remove-logo-button';
      button.className = 'btn-extra';
      button.type = 'button';
      button.textContent = 'Remove logo';
      logoButton.after(button);
    }
    button.onclick = () => {
      logo.removeAttribute('src');
      logo.hidden = true;
      logoButton.textContent = 'Add logo';
      button.remove();
      try { localStorage.removeItem('client-kit-logo'); } catch (error) {}
      toast('Logo removed.');
    };
  }
  if (logo.getAttribute('src')) {
    logo.hidden = false;
    logoButton.textContent = 'Change logo';
    showRemoveLogo();
  } else {
    try {
      const saved = localStorage.getItem('client-kit-logo');
      if (saved) {
        logo.src = saved;
        logo.hidden = false;
        logoButton.textContent = 'Change logo';
        showRemoveLogo();
      }
    } catch (error) {}
  }
  logoButton.addEventListener('click', () => logoInput.click());
  logoInput.addEventListener('change', () => {
    const file = logoInput.files?.[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 1500000) {
      toast('Use a PNG, JPG or WebP logo under 1.5 MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      logo.src = reader.result;
      logo.hidden = false;
      logoButton.textContent = 'Change logo';
      showRemoveLogo();
      try { localStorage.setItem('client-kit-logo', reader.result); }
      catch (error) { toast('Logo added here, but browser storage is full.'); return; }
      toast('Logo added to your templates.');
    };
    reader.readAsDataURL(file);
  });

  let activeMediaSlot = null;
  $('#media-input')?.addEventListener('change', event => {
    const file = event.target.files?.[0], slot = activeMediaSlot;
    event.target.value = '';activeMediaSlot = null;
    if (!file || !slot?.isConnected) return;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 600000) { toast('Use a PNG, JPG or WebP image under 600 KB.');return; }
    const reader = new FileReader();
    reader.onload = () => { if (!slot.isConnected) return;$('.media-preview', slot).src = reader.result;syncMediaSlot(slot);toast('Image added. Save Edits to keep it on this device.'); };
    reader.readAsDataURL(file);
  });

  $('#png-button')?.addEventListener('click', async () => {
    const button = $('#png-button');
    if (typeof html2canvas !== 'function') { toast('PNG tool did not load. Reload the page.'); return; }
    button.disabled = true;
    button.textContent = 'Preparing PNG…';
    try {
      const scale = Math.min(2, Math.sqrt(14000000 / (doc.scrollWidth * doc.scrollHeight)));
      const canvas = await html2canvas(doc, {
        backgroundColor: '#ffffff', scale, useCORS: true, scrollY: -window.scrollY,
        onclone: copy => {
          copy.documentElement.setAttribute('data-theme', 'light');
          copy.querySelectorAll('.add-field-button,.unit-remove,.row-action,.media-actions').forEach(node => node.remove());
          copy.querySelectorAll('[contenteditable]').forEach(node => { node.style.outline = 'none'; node.style.background = 'transparent'; });
        }
      });
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw Error('PNG conversion failed');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = document.title.replace(/[^a-z0-9-]/gi, '-').toLowerCase() + '.png';
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
      toast('PNG downloaded.');
    } catch (error) { console.error(error); toast('PNG export failed. Try PDF or a smaller logo.'); }
    finally { button.disabled = false; button.textContent = 'Save as PNG'; }
  });

  window.saveEdits = function () {
    try {
      const clone = doc.cloneNode(true);
      clone.querySelectorAll('.selected-unit').forEach(node => node.classList.remove('selected-unit'));
      clone.querySelectorAll('.company-logo').forEach(node => node.removeAttribute('src'));
      localStorage.setItem(draftKey, JSON.stringify({ html: cleanHtml(clone.innerHTML), savedAt: new Date().toISOString(), schemaVersion: location.pathname.includes('invoice') ? 2 : 1 }));
      toast('Saved in this browser on this device.');
    } catch (error) { console.error(error); toast('Could not save here. Storage may be full or disabled.'); }
  };
  $('#reset-button')?.addEventListener('click', () => {
    if (confirm('Reset this document and delete its saved draft on this device?')) { localStorage.removeItem(draftKey); location.reload(); }
  });
  $('#download-button')?.addEventListener('click', async function () {
    try {
      const readText = async (selector, url) => {
        const node = $(selector);
        if (node?.textContent.trim()) return node.textContent;
        const response = await fetch(new URL(url, location.href));
        if (!response.ok) throw Error('Could not bundle ' + url);
        return response.text();
      };
      const css = await readText('style[data-kit-enhancement-style]', 'enhancements.css');
      const capture = await readText('script[data-kit-capture]', '../vendor/html2canvas.min.js');
      const runtime = await readText('script[data-kit-enhancement]', 'enhancements.js');
      const clone = document.documentElement.cloneNode(true);
      clone.querySelectorAll('.selected-unit').forEach(node => node.classList.remove('selected-unit'));
      clone.querySelectorAll('.del-btn,#kit-toast').forEach(node => node.remove());
      const style = document.createElement('style');
      style.dataset.kitEnhancementStyle = '';
      style.textContent = css;
      clone.querySelector('link[data-kit-enhancement-style]')?.replaceWith(style);
      for (const [selector, code, marker] of [
        ['script[data-kit-capture]', capture, 'kitCapture'],
        ['script[data-kit-enhancement]', runtime, 'kitEnhancement']
      ]) {
        const script = document.createElement('script');
        script.dataset[marker] = '';
        script.textContent = code;
        clone.querySelector(selector)?.replaceWith(script);
      }
      const blob = new Blob(['<!doctype html>\n' + clone.outerHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = document.title.replace(/[^a-z0-9-]/gi, '-').toLowerCase() + '-edited.html';
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
      toast('Editable HTML downloaded.');
    } catch (error) { console.error(error); toast('Save failed. Please try again.'); }
  });
})();
