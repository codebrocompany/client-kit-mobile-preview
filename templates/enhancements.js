(function () {
  const doc = document.querySelector('.document');
  if (!doc) return;
  const $ = (selector, root = document) => root.querySelector(selector);
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

  // The original template added a delete cross to every nested block. Remove it
  // and keep the standard document structure intact.
  doc.querySelectorAll('.del-btn').forEach(button => button.remove());
  doc.querySelectorAll('.section-heading,.field-label,.doc-title,.invoice-title,.doc-subtitle,.clause-num,.footer-page,.doc-table th,.totals-row>span:not(.totals-amount)').forEach(node => {
    if (node.dataset.custom === 'true') return;
    node.contentEditable = 'false';
    node.removeAttribute('role');
  });
  doc.querySelectorAll('.logo-block span').forEach(node => node.contentEditable = 'false');
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
    wrap.className = 'custom-field';
    wrap.style.marginTop = '12px';
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
          copy.querySelectorAll('.add-field-button').forEach(node => node.remove());
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

  window.saveEdits = async function () {
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
  };
})();
