# Client Templates audit

## Result

The local library exposes 14 directly accessible documents. Purchase, "free",
trial, and promotional callouts were removed from the user-facing library and
documents. The supplied original agreement and invoice remain separate from
12 independently written, fully editable alternatives.

## Verified

| Area | Result |
| --- | --- |
| Library access | 14 document links open directly; no purchase button. |
| Reference coverage | The supplied agreement and invoice keep their original core sections, with optional address, tax, approval, and legal-review fields added. |
| Direct editing | Headings, labels, values, and body text are editable. Bracketed full-name values clear on focus in both editor types. |
| Removal | One red cross removes a full label-value pair, list item, table row, or section. Remaining content reflows; Undo restores the last removal. |
| Original forms | Agreement and invoice use grouped field-pair controls; local draft Save Edits, Add logo, Download HTML, and PNG remain available. |
| New documents | All 12 pages use the same grouped removal and editing rules. Calculated invoice amounts remain manually editable, with recalculation on dependent inputs. |
| Mobile | All 14 pages were checked at 390px viewport width; none produced page-level horizontal overflow. |
| Theme and print | Light mode persists across the library and all 14 documents. In both screen themes, all 14 print-media checks showed white document backgrounds, dark text, no page-level overflow, and hidden edit controls. |
| Actual print review | Safari A4 invoice PDF was generated and both pages were visually inspected after the print-layout update. US Letter was checked in Safari's print preview. |
| Standalone routing | All 12 self-contained document URLs show their own titles and contents even without a query parameter. |
| Packaging | The ZIP includes all 14 document pages and the bundled PNG export library. |

## Source and limits

- The provided source ZIP contains the original library,
  agreement, and invoice only. It does **not** contain the other 12 original HTML
  files. The 12 new documents cover the same publicly listed categories but
  cannot be claimed as identical to the unavailable paid originals.
- The original two documents retain their supplied core wording, but now
  include additional optional fields and editing controls. They are not
  recalculating financial forms.
- The original invoice's A4 print is two pages; the payment heading and fields
  stay together on page two. The other 13 documents were checked with print
  media, but not individually saved as PDFs. Physical-printer and mobile print
  output remain untested. Direct `file://` opening was not testable in the
  available browser.
- The example contract clauses, tax figures, payment details, and business
  placeholders need professional/user review before client use.
- Save Edits uses local browser storage. It is not a server account or cloud
  sync; another phone/browser will not see the draft. Download HTML for backup.
- The 12 independently created documents were reviewed for practical fields:
  parties, scope, pricing, tax placeholders, approvals, ownership, handoff,
  reporting, package terms, and production permissions as applicable. No
  checklist guarantees legal or tax compliance in every jurisdiction.
- Field research used the [CBIC invoice particulars](https://cbic-gst.gov.in/gst-invoice-rules.html),
  [UK model services contract guidance](https://www.gov.uk/government/publications/the-model-services-contract-core-terms-england-wales),
  and [Atlassian project closure guidance](https://www.atlassian.com/software/confluence/resources/guides/how-to/project-closure-template).
- The public mobile-test preview is hosted at
  `https://codebrocompany.github.io/client-kit-mobile-preview/`. No purchase
  was made. Documents contain placeholders, not private client data.
