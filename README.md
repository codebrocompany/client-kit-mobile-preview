# Editable Client Templates

This package has 14 accessible templates: 2 adapted pages from the supplied
source ZIP, plus 12 independently created editable alternatives. The other 12
original source files were not supplied, so these pages are not represented as
copies of unavailable originals.

## Files

- `index.html` — library with working links to all 14 templates; no purchase button.
- `templates/client-agreement.html` — supplied agreement, with promotional text removed.
- `templates/invoice.html` — supplied invoice, with promotional text removed.
- `templates/enhancements.js`, `templates/enhancements.css` — shared original-form editor controls.
- `vendor/html2canvas.min.js` — bundled MIT-licensed PNG exporter.
- `complete/*.html` — 12 new self-contained editable documents, one file each.
- `complete/editor.html`, `complete/app.js`, `complete/style.css` — source files
  used to generate those 12 documents.

Use the public mobile-test preview at
`https://codebrocompany.github.io/client-kit-mobile-preview/`, or serve this
folder with a static HTTP server and open `index.html`. The 12 new documents
are self-contained HTML. Direct `file://` opening was not verified in the
available browser environment.
Tap any heading, label, value, or body text to edit it. A bracketed field
clears on focus. Use **+ Section** and **+ Field** to add your own content.
The red **×** removes one complete field pair, row, text block, or section;
the layout reflows immediately. **Undo** restores the last removal.
**Add logo** accepts PNG, JPG, or WebP up
to 1.5 MB; the logo is remembered in this browser across templates. **Save
Edits** saves the current document in this browser on this device. Reopening
the page in the same browser restores it. **Reset** deletes that saved draft.
This does not sync to other browsers or devices, and browser storage can be
cleared by the user. **Download HTML** creates a portable editable backup with
the logo embedded. **Save as PDF** opens
the browser print dialog; **Save as PNG** downloads a full-length image. PNG
and print exports use a light paper background and hide editing controls. The library and all documents
also have a persistent light/dark screen theme. The detailed invoice calculates
its line amounts and totals from quantity, rate, and tax rate; those outputs
can also be manually edited until a dependent input changes. The supplied
original invoice retains editable amount text without automatic calculation.

For printing, choose A4 or US Letter and turn off the browser's "Print headers
and footers" option. The original invoice can span two pages; its payment
instructions now move together to the second page rather than leaving an
orphan heading on the first.

Review all placeholders, prices, payment details, and legal wording before
sending a document to a client. No client data is sent by the local templates.
See `AUDIT.md` for verification scope and remaining limitations.
