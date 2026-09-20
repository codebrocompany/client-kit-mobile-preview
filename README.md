# Editable Client Templates

This package has 18 accessible templates: 2 adapted pages from the supplied
source ZIP, 12 independently created client-document alternatives, and 4 new
employment-document templates. The other 12 original client-document source
files were not supplied, so those pages are not represented as copies of
unavailable originals.

## Files

- `index.html` — library with working links to all 18 templates; no purchase button.
- `templates/client-agreement.html` — supplied agreement, with promotional text removed.
- `templates/invoice.html` — supplied invoice, with promotional text removed.
- `templates/enhancements.js`, `templates/enhancements.css` — shared original-form editor controls.
- `vendor/html2canvas.min.js` — bundled MIT-licensed PNG exporter.
- `complete/*.html` — 16 new self-contained editable documents, one file each,
  including Offer, Relieving, Experience, and Termination Letters.
- `complete/editor.html`, `complete/app.js`, `complete/style.css` — source files
  used to generate those 16 documents.

Use the public mobile-test preview at
`https://codebrocompany.github.io/client-kit-mobile-preview/`, or serve this
folder with a static HTTP server and open `index.html`. The 16 new documents
are self-contained HTML. Direct `file://` opening was not verified in the
available browser environment.
Tap any heading, label, value, or body text to edit it. A bracketed field
clears on focus. Use **+ Section** and **+ Field** to add your own content.
Tap a field, row, text block, or section to reveal its red **×**. Tap outside
to hide it. The **×** removes that complete unit;
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
open in dark mode by default; Light mode is an explicit browser preference.
The detailed invoice calculates
its line amounts and totals from quantity, rate, and tax rate; those outputs
can also be manually edited until a dependent input changes. The supplied
original invoice retains editable amount text without automatic calculation.

For printing, A4 is the default paper size. Choose another size in the print
dialog if necessary, and turn off the browser's "Print headers and footers"
option. The original invoice can span two pages; its payment
instructions now move together to the second page rather than leaving an
orphan heading on the first.

The offer letter follows a three-page A4 letterhead format: offer details,
compensation Annexure A with signatures, and employment terms. Its fields
remain editable and the salary table must be checked manually; it does not
calculate compensation. A previous offer-letter draft, if present, remains
on this device and can be opened with **Old draft**; the new format uses a
separate draft slot so the older version is not silently overwritten.
The offer letter alone uses Cambria where available and the OFL-licensed
Caladea fallback for browsers without it; its compensation table uses Times
New Roman when available. The logo upload is above the company name and is
shared across the three offer pages. Existing offer drafts are kept, with
missing logo/signature controls added when they reopen. The logo placeholder
is excluded from PDF/PNG output until a real logo is uploaded.

Review all placeholders, prices, payment details, and legal wording before
sending a document to a client. No client data is sent by the local templates.
Employment letters must also be checked against actual HR/payroll records,
contracts, policies, and applicable law before issue. Sensitive employee details
stored with Save Edits remain in unencrypted browser storage on this device;
avoid shared devices and use secure storage for downloaded backups. See
`AUDIT.md` and `HR_RESEARCH.md` for verification scope and remaining limits.
