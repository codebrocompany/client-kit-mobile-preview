# Complete Local Client Kit

This package has 14 accessible templates: the 2 supplied STJ reference pages from
the supplied ZIP, plus 12 independently created editable alternatives. The
12 paid STJ source files were not included in the supplied ZIP, so the new
pages are not represented as copies of those paid originals.

## Files

- `index.html` — library with working links to all 14 templates; no purchase button.
- `templates/client-agreement.html` — supplied agreement, with promotional text removed.
- `templates/invoice.html` — supplied invoice, with promotional text removed.
- `complete/*.html` — 12 new self-contained editable documents, one file each.
- `complete/editor.html`, `complete/app.js`, `complete/style.css` — source files
  used to generate those 12 documents.

Serve this folder with a static HTTP server and open `index.html`. The 12 new
documents are self-contained HTML. Direct `file://` opening was not verified
in the available browser environment.
Click text inside a document to edit. The custom templates support section
removal and undo, light mode, Save Edits (a self-contained editable HTML copy),
and Save as PDF. In the new detailed invoice, line amounts, subtotal, tax,
and total are directly editable. Quantity/rate and tax-rate changes also
recalculate the dependent amounts; a later recalculation can replace a manual
amount override. The supplied original invoice keeps its own original
behavior, where amount text is editable but not auto-calculated.

Review all placeholders, prices, payment details, and legal wording before
sending a document to a client. No client data is sent by the local templates.
See `AUDIT.md` for verification scope and remaining limitations.
