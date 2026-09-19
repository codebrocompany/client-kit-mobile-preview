(function () {
  const doc = document.querySelector('.document');
  if (!doc) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const draftKey = 'codebro-client-draft-v2:' + (location.pathname.includes('invoice') ? 'invoice' : 'client-agreement');
  function cleanHtml(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    template.content.querySelectorAll('script,iframe,object,embed,form,link,meta').forEach(node => node.remove());
    template.content.querySelectorAll('*').forEach(node => {
      for (const attribute of [...node.attributes]) if (/^on/i.test(attribute.name) || /^(src|href)$/i.test(attribute.name) && /^(javascript:|data:text\/html)/i.test(attribute.value)) node.removeAttribute(attribute.name);
    });
    return template.innerHTML;
  }
  try {
    const saved = JSON.parse(localStorage.getItem(draftKey) || 'null');
    if (saved?.html) doc.innerHTML = cleanHtml(saved.html);
  } catch (error) { console.warn('Could not restore draft', error); }
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
  doc.addEventListener('click', event => {
    const button = event.target.closest('.unit-remove');
    if (!button) return;
    event.stopPropagation();
    const unit = button.closest('.removable-unit');
    if (!unit) return;
    removedItems.push({ node: unit, parent: unit.parentNode, next: unit.nextSibling });
    unit.remove();
    refreshLayout();
    toast('Removed. Tap Undo to restore.');
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
    if (node.contentEditable !== 'true') return;
    const text = node.textContent.trim();
    if (node.children.length === 0 && /^\[[\s\S]+\]$/.test(text)) {
      node.dataset.placeholder = text;
      node.textContent = '';
      node.classList.remove('placeholder');
    }
  });

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
          copy.querySelectorAll('.add-field-button,.unit-remove,.row-action').forEach(node => node.remove());
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
      clone.querySelectorAll('.company-logo').forEach(node => node.removeAttribute('src'));
      localStorage.setItem(draftKey, JSON.stringify({ html: cleanHtml(clone.innerHTML), savedAt: new Date().toISOString() }));
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
