const details = {
  "agreement-full": {name:"Client Agreement", category:"Complete collection", description:"A more detailed service agreement for a defined client engagement.", sections:[
    {title:"Agreement details",fields:[["Effective date","[DD Month YYYY]"],["Provider full name","[YOUR FULL NAME]"],["Provider business","[YOUR BUSINESS NAME]"],["Provider email","[YOUR EMAIL]"],["Provider address","[ADDRESS]"],["Client full name","[CLIENT FULL NAME]"],["Client business","[CLIENT BUSINESS NAME]"],["Client email","[CLIENT EMAIL]"],["Client address","[ADDRESS]"],["Project / campaign name","[PROJECT NAME]"],["Platforms / deliverable type","[PLATFORMS OR DELIVERABLES]"]]},
    {title:"Scope of work",bullets:["Service or session: [WHAT IS INCLUDED]","Deliverables and quantities: [ITEMS AND FORMATS]","Review rounds: [NUMBER INCLUDED]","Delivery method: [LINK OR CHANNEL]","Discovery and brief: [PROCESS]"]},
    {title:"Statement of work",paragraphs:["The service provider will deliver [SPECIFIC DELIVERABLES]. The approved project brief, milestones, and acceptance criteria form part of this agreement.","Any request outside the approved scope requires a written change order covering price and schedule before work begins."]},
    {title:"Timeline & responsibilities",fields:[["Start date","[DATE]"],["Target completion","[DATE]"],["Client materials due","[DATE]"],["Review turnaround","[NUMBER OF BUSINESS DAYS]"]],paragraphs:["The client will provide timely access, content, and approvals. Delays in those inputs may move the delivery date by mutual written agreement."]},
    {title:"Commercial terms",fields:[["Total fee","[AMOUNT + CURRENCY]"],["Deposit to confirm booking","[AMOUNT / PERCENT]"],["Balance due","[DATE OR MILESTONE]"],["Accepted payment methods","[BANK TRANSFER / OTHER]"],["Milestone payments","[MILESTONES]"],["Invoice due date","[NUMBER OF DAYS]"]],paragraphs:["Applicable taxes and third-party expenses should be shown separately on invoices or in the project brief."]},
    {title:"Review, acceptance & support",paragraphs:["The fee includes [NUMBER] consolidated revision rounds. The client should report issues against the agreed acceptance criteria within [NUMBER] business days of delivery.","Support after acceptance, maintenance, and hosting are included only if separately listed in the project brief."]},
    {title:"Rights & confidentiality",paragraphs:["Final work created specifically for the client transfers on full payment. Pre-existing provider tools, reusable methods, and third-party components remain subject to their existing ownership and licences.","Each party will protect non-public information received for this project and use it only for project delivery."]},
    {title:"Cancellation",paragraphs:["Either party may cancel in writing. Specify deposit treatment, payment for completed work, approved non-cancellable expenses, and any notice period here: [CANCELLATION TERMS]."]},
    {title:"Legal & dispute details",fields:[["Governing law / jurisdiction","[REVIEW WITH COUNSEL]"],["Dispute escalation contact","[NAME / EMAIL]"],["Notice method","[EMAIL / POSTAL ADDRESS]"],["Data handling / access","[PROJECT-SPECIFIC ARRANGEMENTS]"]],paragraphs:["Add any agreed liability, insurance, or force-majeure terms only after legal review for your jurisdiction and project."]},
    {title:"Signatures",paragraphs:["By signing, both parties acknowledge the agreed scope, payment terms, and project schedule."],fields:[["Provider printed name","[YOUR FULL NAME]"],["Provider signature","[SIGNATURE]"],["Provider date","[DATE]"],["Client printed name","[CLIENT FULL NAME]"],["Client signature","[SIGNATURE]"],["Client date","[DATE]"]]}
  ]},
  "invoice-full": {name:"Invoice", category:"Complete collection", description:"A detailed invoice for milestones, tax, and payment tracking.", sections:invoiceSections(true)},
  "welcome-doc": {name:"Welcome Doc", category:"Complete collection", description:"Start the client relationship with clear expectations and contacts.", sections:[
    {title:"Welcome",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Project lead","[YOUR CONTACT]"],["Kickoff date","[DATE]"]],paragraphs:["Thank you for choosing us. This document explains how we will communicate, review work, and keep decisions moving."]},
    {title:"How we will work",bullets:["Primary communication channel: [EMAIL / SHARED SPACE]","Regular update cadence: [DAY / FREQUENCY]","Feedback format: one consolidated list per review round","Urgent issues: [CONTACT METHOD AND HOURS]"]},
    {title:"What we need from you",bullets:["Brand assets, copy, and approved visual references","Access to required accounts and technical contacts","One decision maker for feedback and approvals","Any legal or compliance requirements before design begins"]},
    {title:"Next steps",fields:[["Kickoff call","[DATE AND TIME]"],["First milestone","[MILESTONE]"],["Client action","[WHAT TO SEND FIRST]"],["Approval contact","[NAME / EMAIL]"],["Shared project space","[LINK]"],["Access transfer method","[SECURE METHOD — DO NOT PASTE PASSWORDS]"]]}
  ]},
  "discovery-call": {name:"Discovery Call", category:"Complete collection", description:"Structure first conversations and capture the answers that shape a proposal.", sections:[
    {title:"Meeting details",fields:[["Client","[CLIENT / COMPANY]"],["Date","[DATE]"],["Attendees","[NAMES]"],["Opportunity","[PROJECT TYPE]"]]},
    {title:"The business problem",fields:[["What needs to change?","[CURRENT PROBLEM]"],["Who is affected?","[USERS / TEAMS]"],["Why now?","[DRIVER OR DEADLINE]"],["What does success look like?","[MEASURABLE OUTCOME]"]]},
    {title:"Project fit",fields:[["Core features","[MUST HAVES]"],["Existing tools","[SYSTEMS / INTEGRATIONS]"],["Budget range","[RANGE OR TO BE CONFIRMED]"],["Timeline","[TARGET]"]]},
    {title:"Decisions & follow-up",fields:[["Decision maker","[NAME]"],["Other stakeholders","[NAMES / ROLES]"],["Decision criteria","[PRIORITIES]"],["Key risks / constraints","[RISKS]"],["Open questions","[QUESTIONS]"],["Next action","[ACTION / OWNER / DATE]"]]}
  ]},
  "project-brief": {name:"Project Brief", category:"Complete collection", description:"Turn the discovery call into a clear project direction.", sections:[
    {title:"Overview",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Prepared by","[NAME]"],["Version","[DATE / VERSION]"]],paragraphs:["In one paragraph, describe the product or service to be built: [PROJECT SUMMARY]."]},
    {title:"Goals & audience",fields:[["Primary goal","[OUTCOME]"],["Target users","[AUDIENCE]"],["Success measure","[METRIC]"],["Key constraint","[TIME / BUDGET / TECH]"]]},
    {title:"Scope",bullets:["In scope: [FEATURES AND DELIVERABLES]","Out of scope: [EXCLUSIONS]","Dependencies: [CONTENT, ACCESS, THIRD PARTIES]","Acceptance criteria: [HOW COMPLETION WILL BE CHECKED]"]},
    {title:"Milestones",table:{headers:["Stage","Deliverable","Target date"],rows:[["Discovery","[APPROVED BRIEF]","[DATE]"],["Design","[SCREEN / PAGE REVIEW]","[DATE]"],["Build","[WORKING RELEASE]","[DATE]"],["Handoff","[FINAL FILES / ACCESS]","[DATE]"]]}},
    {title:"Assumptions & risks",fields:[["Key assumptions","[ASSUMPTIONS]"],["Main risks","[RISK / OWNER / MITIGATION]"],["Budget / commercial reference","[APPROVED ESTIMATE OR LINK]"],["Technical requirements","[PLATFORMS / INTEGRATIONS / ACCESSIBILITY]"]]},
    {title:"Approval",fields:[["Client approver","[NAME]"],["Approved on","[DATE]"],["Approval evidence","[EMAIL / DOCUMENT LINK]"]]}
  ]},
  "task-list": {name:"Task List", category:"Complete collection", description:"Track deliverables, owners, status, and deadlines in one shared view.", sections:[
    {title:"Project details",fields:[["Project","[PROJECT NAME]"],["Client","[CLIENT NAME]"],["Reporting period","[DATES]"],["Project lead","[NAME]"]]},
    {title:"Work tracker",table:{headers:["Task","Owner","Due","Status"],rows:[["[TASK 1]","[OWNER]","[DATE]","Not started"],["[TASK 2]","[OWNER]","[DATE]","In progress"],["[TASK 3]","[OWNER]","[DATE]","Blocked"],["[TASK 4]","[OWNER]","[DATE]","Done"],["[TASK 5]","[OWNER]","[DATE]","Not started"]]}},
    {title:"Blockers & decisions",fields:[["Current blocker","[DESCRIPTION / OWNER]"],["Decision needed","[QUESTION / DUE DATE]"],["Priority order","[HIGH / MEDIUM / LOW]"],["Dependencies","[TASK OR PERSON]"],["Completion evidence","[LINK / APPROVAL]"]]}
  ]},
  "delivery-guide": {name:"Delivery Guide", category:"Complete collection", description:"Make the final handoff easy to understand and use.", sections:[
    {title:"Delivery summary",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Delivery date","[DATE]"],["Release version","[VERSION]"]],paragraphs:["The following approved work is ready for handoff: [SHORT SUMMARY]."]},
    {title:"What is included",bullets:["Final deliverables: [LINKS / FILES]","Admin and owner access: [HOW ACCESS IS TRANSFERRED]","Design and source files: [LOCATION]","Documentation and walkthrough: [LOCATION]"]},
    {title:"How to use it",table:{headers:["Action","Where","Notes"],rows:[["Sign in","[URL]","[INSTRUCTIONS]"],["Manage content","[DASHBOARD]","[INSTRUCTIONS]"],["Get help","[SUPPORT CHANNEL]","[HOURS / PROCESS]"]]}},
    {title:"Acceptance & next steps",fields:[["Client review by","[DATE]"],["Open items","[ITEMS OR NONE]"],["Support period","[TERMS]"],["Support owner","[NAME / CONTACT]"],["Backup / rollback location","[LINK / METHOD]"],["Access transfer confirmation","[DATE / OWNER — NO PASSWORDS]"],["Client sign-off","[NAME / DATE / EVIDENCE]"]]}
  ]},
  "monthly-report": {name:"Monthly Report", category:"Complete collection", description:"Report progress, outcomes, decisions, and priorities.", sections:[
    {title:"Report overview",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Period","[MONTH / YEAR]"],["Prepared by","[NAME]"]]},
    {title:"Executive summary",paragraphs:["This month we focused on [PRIORITY]. The most important outcome was [RESULT]. Next month we will focus on [NEXT PRIORITY]."]},
    {title:"Progress",table:{headers:["Workstream","Completed","Next"],rows:[["[AREA 1]","[RESULT]","[NEXT ACTION]"],["[AREA 2]","[RESULT]","[NEXT ACTION]"],["[AREA 3]","[RESULT]","[NEXT ACTION]"]]}},
    {title:"Metrics & evidence",fields:[["Metric 1","[VALUE + SOURCE]"],["Metric 2","[VALUE + SOURCE]"],["Metric 3","[VALUE + SOURCE]"],["Measurement note","[LIMITATIONS OR CONTEXT]"]]},
    {title:"Risks & approvals",fields:[["Risk / blocker","[DESCRIPTION]"],["Risk owner / mitigation","[OWNER / ACTION]"],["Client decision needed","[DECISION / DATE]"],["Next month owner","[NAME / ACTION / DATE]"],["Report approved by","[NAME / DATE]"]]}
  ]},
  "thank-you-doc": {name:"Thank You Doc", category:"Complete collection", description:"Close the project with appreciation and a useful handoff reminder.", sections:[
    {title:"Thank you",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Date","[DATE]"]],paragraphs:["Thank you for trusting us with [PROJECT]. It has been a pleasure working with your team. We are proud to have delivered [OUTCOME]."]},
    {title:"Your handoff at a glance",bullets:["Final work: [LINK]","Owner access and documentation: [LINK]","Outstanding follow-up: [ITEM OR NONE]","Support contact: [EMAIL / CHANNEL]"]},
    {title:"Keep in touch",paragraphs:["When you are ready for the next phase, send us your priorities and we will help plan a sensible path forward."],fields:[["Your project contact","[NAME / EMAIL]"],["Support window","[DATES / TERMS]"],["Pending action / owner","[ACTION / NAME / DATE]"]]}
  ]},
  "feedback-request": {name:"Feedback Request", category:"Complete collection", description:"Ask useful questions that improve future work.", sections:[
    {title:"Project details",fields:[["Client","[CLIENT NAME]"],["Project","[PROJECT NAME]"],["Completed on","[DATE]"]]},
    {title:"A few questions",fields:[["What worked especially well?","[CLIENT RESPONSE]"],["What should we improve?","[CLIENT RESPONSE]"],["How well did the outcome meet your goals?","[RATING / RESPONSE]"],["Would you work with us again?","[RESPONSE]"]]},
    {title:"Permission to share",paragraphs:["May we use your feedback as a testimonial? Please choose yes or no and indicate how your name and company may appear."],fields:[["Permission","[YES / NO]"],["Attribution","[NAME / COMPANY / ANONYMOUS]"],["Approved quote / excerpt","[EXACT APPROVED WORDING]"],["Where it may appear","[WEBSITE / SOCIAL / CASE STUDY]"],["Permission date","[DATE]"]]},
    {title:"Follow-up",fields:[["Would a follow-up call help?","[YES / NO]"],["Preferred contact","[EMAIL / PHONE]"]]}
  ]},
  "package-menu": {name:"Package Menu", category:"Complete collection", description:"Show prospective clients clear options without inventing a fixed quote.", sections:[
    {title:"Introduction",fields:[["Prepared for","[CLIENT / AUDIENCE]"],["Date","[DATE]"],["Valid until","[DATE / SUBJECT TO CHANGE]"],["Currency","[CURRENCY]"]],paragraphs:["These example packages show possible ways to work together. Final scope, timeline, and price are confirmed in a tailored proposal."]},
    {title:"Options",table:{headers:["Option","Best for","Includes","Price"],rows:[["Essential","[USE CASE]","[DELIVERABLES]","[CUSTOM QUOTE]"],["Growth","[USE CASE]","[DELIVERABLES]","[CUSTOM QUOTE]"],["Custom","[USE CASE]","[DELIVERABLES]","[CUSTOM QUOTE]"]]}},
    {title:"Package details",fields:[["Typical timeline","[BY PACKAGE OR CUSTOM QUOTE]"],["Revision allowance","[NUMBER OR CUSTOM QUOTE]"],["Exclusions","[WHAT IS NOT INCLUDED]"],["Third-party costs","[TOOLS / LICENCES / HOSTING]"],["Payment schedule","[DEPOSIT / MILESTONES]"],["Deliverable format","[FILES / ACCESS / DOCUMENTATION]"]]},
    {title:"How we scope",bullets:["Discovery call to understand users and business goals","Written project brief and delivery milestones","Proposal with assumptions, exclusions, and payment schedule","Approval before work begins"]},
    {title:"Next step",fields:[["Contact","[YOUR CONTACT]"],["Discovery call","[DATE / LINK]"]]}
  ]},
  "offer-letter": {name:"Employee Offer Letter", category:"HR documents", description:"A conditional job offer with role, compensation, work terms, and an acceptance record.", sections:[
    {title:"Offer identification",fields:[["Letter date","[DD Month YYYY]"],["Offer reference","[REFERENCE NUMBER]"],["Subject","Offer of Employment — [JOB TITLE]"],["Employer legal name","[REGISTERED ENTITY NAME]"],["Employer address","[REGISTERED / OFFICE ADDRESS]"],["Candidate full name","[FULL NAME]"],["Candidate address","[ADDRESS]"],["Candidate email","[EMAIL]"]],paragraphs:["Dear [CANDIDATE NAME], we are pleased to offer you the position described below, subject to the conditions and documents stated in this letter."]},
    {title:"Role & start",fields:[["Job title","[POSITION]"],["Department / team","[TEAM]"],["Reporting to","[MANAGER / TITLE]"],["Primary work location","[CITY / REMOTE / HYBRID]"],["Employment type","[FULL-TIME / PART-TIME / FIXED-TERM]"],["Expected joining date","[DATE]"],["Fixed-term end date, if relevant","[DATE OR NOT APPLICABLE]"],["Role summary / job description","[KEY RESPONSIBILITIES OR ATTACHMENT]"]]},
    {title:"Compensation & benefits",fields:[["Currency","[CURRENCY]"],["Annual gross / CTC, as applicable","[AMOUNT AND BASIS]"],["Fixed pay / base salary","[AMOUNT AND PERIOD]"],["Variable pay or bonus","[PLAN / ELIGIBILITY OR NONE]"],["Pay frequency","[MONTHLY / OTHER]"],["Benefits & insurance","[PLAN / ELIGIBILITY]"],["Statutory deductions / contributions","[AS APPLICABLE]"],["Compensation schedule","[ATTACHMENT / BREAKDOWN LINK]"]],paragraphs:["The detailed compensation schedule identified above forms part of this offer, subject to applicable deductions and plan terms."]},
    {title:"Work terms",fields:[["Normal working days / hours","[SCHEDULE]"],["Leave and holidays","[POLICY / ENTITLEMENT]"],["Probation period, if any","[DURATION / REVIEW METHOD]"],["Notice during probation","[TERMS / NOT APPLICABLE]"],["Notice after confirmation","[TERMS / POLICY]"],["Applicable policies / handbook","[DOCUMENT OR LINK]"],["Travel / transfer expectation","[TERMS OR NONE]"]]},
    {title:"Standard workplace rules",fields:[["Code of conduct / handbook","[DOCUMENT / VERSION / ACCESS METHOD]"],["HR and grievance contact","[NAME / EMAIL / PROCESS]"],["Safety and anti-harassment policy","[DOCUMENT / CONTACT]"]],bullets:[
      "Duties and conduct: Perform the role with reasonable care, follow lawful and reasonable work instructions, and treat colleagues, clients, and visitors respectfully. Harassment, discrimination, fraud, and retaliation are not permitted under the applicable workplace policies.",
      "Working time and attendance: Follow the agreed schedule and attendance process. Any additional hours, rest days, or holiday work require the approval and treatment specified in company policy and applicable law.",
      "Leave and absence: Request planned leave through the stated process and notify your manager promptly of an unplanned absence. Leave, holidays, and related pay will follow the stated policy and applicable minimum legal entitlements.",
      "Pay and deductions: Salary will be paid at the frequency stated above. Taxes and other deductions or contributions will be handled only as required or permitted by applicable law and the agreed compensation terms.",
      "Confidentiality and personal data: Use non-public company, employee, and client information only for authorised work. Protect it from unauthorised access or disclosure during and after employment, except where disclosure is required or protected by law.",
      "Systems and property: Use company accounts, equipment, software, and records for authorised purposes. Keep credentials secure, promptly report loss or security incidents, and return company property through the documented exit process.",
      "Conflicts of interest: Disclose actual or potential conflicts that could affect your work. Outside activities will be handled under the disclosed company policy and applicable law.",
      "Health and safety: Follow applicable workplace safety instructions, use required safeguards, and promptly report hazards, accidents, or concerns through the designated channel.",
      "Work product: Ownership and permitted use of work created in the course of employment are governed by the signed employment agreement, applicable company policy, and law; review any separate intellectual-property terms before signing."
    ]},
    {title:"Policies, changes & separation",paragraphs:[
      "The employee will be given access to the policies identified above. Policies may be updated and communicated from time to time, but this letter does not remove statutory rights or automatically change a signed employment term without the required process.",
      "Any performance or conduct concern will be addressed under the applicable policy and lawful procedure. The employee may raise a workplace concern through the HR or grievance contact stated above.",
      "Resignation, notice, termination, final pay, statutory benefits, and return of company property will be handled under the agreed employment terms and applicable law. The notice terms, if any, are stated in the Work terms section above."
    ]},
    {title:"Conditions before joining",bullets:["Identity, qualification, reference, or background checks: [SPECIFY APPLICABLE CHECKS]","Work eligibility and required joining documents: [LIST / SECURE SUBMISSION METHOD]","Any separate appointment letter or employment agreement: [DOCUMENT / WHEN PROVIDED]","Deadline to accept this offer: [DATE AND TIME]"],paragraphs:["This offer is subject to the conditions listed above. Please contact [HR CONTACT] if you need clarification before accepting."]},
    {title:"Acceptance & signatures",fields:[["Employer signatory","[NAME / TITLE]"],["Employer signature / issue date","[SIGNATURE / DATE]"],["Candidate acceptance","[I ACCEPT / DECLINE]"],["Candidate signature","[SIGNATURE]"],["Acceptance date","[DATE]"],["Joining contact","[HR NAME / EMAIL]"]],paragraphs:["By signing, the candidate acknowledges the terms in this offer and the identified attachments."]}
  ]},
  "relieving-letter": {name:"Relieving Letter", category:"HR documents", description:"Confirm the employee's verified last working day and release from duties without assuming settlement is complete.", sections:[
    {title:"Letter details",fields:[["Issue date","[DD Month YYYY]"],["Letter reference","[REFERENCE NUMBER]"],["Subject","Relieving Letter — [EMPLOYEE NAME]"],["Employer legal name","[REGISTERED ENTITY NAME]"],["Employer address","[ADDRESS]"],["Employee full name","[FULL NAME]"],["Employee ID, if used","[ID OR NOT APPLICABLE]"],["Job title / department","[TITLE / TEAM]"]],paragraphs:["Dear [EMPLOYEE NAME], this letter records your separation details and confirms the date on which you were relieved from assigned duties."]},
    {title:"Separation record",fields:[["Employment start date","[DATE]"],["Resignation received / notice date","[DATE OR NOT APPLICABLE]"],["Resignation acceptance date","[DATE OR NOT APPLICABLE]"],["Last working day","[DATE]"],["Relieved effective","[DATE / END OF DAY]"],["Separation type","[RESIGNATION / MUTUAL / OTHER VERIFIED TYPE]"]],paragraphs:["This is to confirm that [EMPLOYEE NAME] was relieved from assigned duties with [EMPLOYER NAME] effective [DATE]. The dates and separation type above should match the HR/payroll record."]},
    {title:"Handover & pending items",fields:[["Handover recipient","[NAME / TEAM]"],["Handover status","[COMPLETED / PENDING DETAILS]"],["Company assets / access status","[RETURNED / PENDING DETAILS]"],["Final settlement status","[SEPARATE PROCESS / DATE / PENDING]"],["Benefits / statutory record contact","[HR OR PAYROLL CONTACT]"]],paragraphs:["Any pending handover or final settlement item will be communicated separately by [HR / PAYROLL CONTACT]."]},
    {title:"Authorization",fields:[["Authorized signatory","[NAME]"],["Title","[JOB TITLE]"],["Signature","[SIGNATURE]"],["Official email / phone","[CONTACT]"],["Delivery method / date","[EMAIL / HAND DELIVERY / DATE]"]]}
  ]},
  "experience-letter": {name:"Experience Letter", category:"HR documents", description:"Verify actual service dates, roles, and work performed using employer records.", sections:[
    {title:"Certificate details",fields:[["Issue date","[DD Month YYYY]"],["Certificate reference","[REFERENCE NUMBER]"],["Subject","Employment Experience Certificate"],["Addressee","To Whom It May Concern"],["Employer legal name","[REGISTERED ENTITY NAME]"],["Employer address","[ADDRESS]"],["Employee full name","[FULL NAME]"],["Employee ID, if used","[ID OR NOT APPLICABLE]"]]},
    {title:"Employment record",fields:[["Date of joining","[DATE]"],["Last working day / current status","[DATE OR CURRENTLY EMPLOYED]"],["Final designation","[JOB TITLE]"],["Department / team","[TEAM]"],["Work location","[CITY / REMOTE]"],["Employment type","[FULL-TIME / PART-TIME / FIXED-TERM]"],["Other roles and dates, if any","[ROLE / PERIOD OR NONE]"]],paragraphs:["This letter confirms that [EMPLOYEE NAME] worked with [EMPLOYER NAME] for the period shown above."]},
    {title:"Work performed",fields:[["Primary responsibilities","[FACTUAL ROLE SUMMARY]"],["Projects / assignments, if appropriate","[VERIFIED EXAMPLES OR OMIT]"],["Performance comments, if approved","[OPTIONAL VERIFIED STATEMENT OR OMIT]"]]},
    {title:"Verification & authorization",fields:[["Purpose / issued at request of","[EMPLOYEE / PURPOSE OR OMIT]"],["Authorized signatory","[NAME / TITLE]"],["Signature and stamp, if used","[SIGNATURE / STAMP]"],["HR verification contact","[OFFICIAL EMAIL / PHONE]"],["Issue location","[CITY]"]]}
  ]},
  "termination-letter": {name:"Termination Letter", category:"HR documents", description:"A review-first separation notice with process, dates, notice, settlement, and handover fields.", sections:[
    {title:"Notice identification",fields:[["Letter date","[DD Month YYYY]"],["Notice reference","[REFERENCE NUMBER]"],["Subject","Notice of Termination of Employment"],["Employer legal name","[REGISTERED ENTITY NAME]"],["Employer address","[ADDRESS]"],["Employee full name","[FULL NAME]"],["Employee ID, if used","[ID OR NOT APPLICABLE]"],["Job title / department","[TITLE / TEAM]"],["Employment start date","[DATE]"]],paragraphs:["Dear [EMPLOYEE NAME], this letter sets out the decision and practical arrangements concerning the end of your employment."]},
    {title:"Decision & process",fields:[["Separation category","[VERIFIED CATEGORY]"],["Decision summary","[FACTUAL, APPROVED WORDING]"],["Contract / policy reference","[CLAUSE / DOCUMENT]"],["Prior communication or process record","[NOTICE / HEARING / CONSULTATION REFERENCE OR N/A]"],["Decision authority","[APPROVING PERSON / ROLE]"],["Legal / HR review completed","[REVIEWER / DATE]"]],paragraphs:["This letter provides notice that employment with [EMPLOYER NAME] will end effective [DATE], as detailed below."]},
    {title:"Effective dates & notice",fields:[["Notice issued on","[DATE]"],["Notice period required, if any","[PER AGREEMENT / APPLICABLE LAW]"],["Last working day","[DATE]"],["Employment termination effective","[DATE AND TIME]"],["Work status during notice","[WORK / LEAVE / PAY IN LIEU AS REVIEWED]"],["Notice pay / adjustment","[AMOUNT / METHOD / NOT APPLICABLE]"]]},
    {title:"Pay, benefits & records",fields:[["Final wage / settlement process","[PAYROLL CONTACT / TARGET DATE]"],["Accrued leave treatment","[AS APPLICABLE AFTER REVIEW]"],["Statutory benefits / contributions","[PF / GRATUITY / OTHER AS APPLICABLE]"],["Expense claims deadline","[DATE / PROCESS]"],["Payslip / tax documents","[HOW AND WHEN PROVIDED]"],["Separation documents","[EXPERIENCE / RELIEVING / OTHER AS APPLICABLE]"]]},
    {title:"Handover, access & contact",fields:[["Handover recipient","[NAME / TEAM]"],["Company property return","[ITEMS / METHOD / DATE]"],["System access / data handover","[PROCESS — DO NOT INCLUDE PASSWORDS]"],["Questions / review contact","[HR NAME / EMAIL]"],["Appeal / grievance route, if applicable","[POLICY / CONTACT / DEADLINE]"],["Delivery method / record","[EMAIL / HAND DELIVERY / DATE]"]]},
    {title:"Authorization & receipt",fields:[["Authorized signatory","[NAME / TITLE]"],["Signature","[SIGNATURE]"],["Issue date","[DATE]"],["Employee receipt acknowledgement","[RECEIVED ON / OPTIONAL]"]]}
  ]},
  "b-roll-checklist": {name:"B-Roll Checklist", category:"Complete collection", description:"Plan the supporting shots that make a product story feel real.", sections:[
    {title:"Shoot details",fields:[["Project / campaign","[NAME]"],["Shoot date","[DATE]"],["Location","[LOCATION]"],["Creative lead","[NAME]"]]},
    {title:"Shot list",table:{headers:["Shot","Purpose","Owner","Done"],rows:[["Workspace wide shot","[CONTEXT]","[NAME]","□"],["Hands using the product","[DEMONSTRATION]","[NAME]","□"],["Close-up detail","[FEATURE]","[NAME]","□"],["Team interaction","[PROCESS]","[NAME]","□"],["Client environment","[AUTHENTICITY]","[NAME]","□"]]}},
    {title:"Production check",bullets:["Location access and permissions confirmed","Devices charged and storage cleared","Brand props and product build ready","Audio, lighting, and backup gear checked","Release/consent requirements confirmed"]},
    {title:"Technical & permissions",fields:[["Aspect ratios","[9:16 / 16:9 / OTHER]"],["Resolution / frame rate","[SPEC]"],["Audio requirements","[AMBIENCE / NONE]"],["Talent / location releases","[CONFIRMED / PENDING]"],["Usage rights / restrictions","[PROJECT-SPECIFIC TERMS]"]]},
    {title:"Delivery",fields:[["Footage location","[FOLDER / LINK]"],["Backup location","[FOLDER / OWNER]"],["Editor handoff","[DATE]"],["Missing shots","[NONE OR LIST]"]]}
  ]}
};

const collectionIds = ["agreement-full","invoice-full","welcome-doc","discovery-call","project-brief","task-list","delivery-guide","monthly-report","thank-you-doc","feedback-request","package-menu","b-roll-checklist","offer-letter","relieving-letter","experience-letter","termination-letter"];

function invoiceSections(full){
  const result=[
    {title:"Invoice details",fields:[["Invoice number","[INV-001]"],["Issue date","[DD Month YYYY]"],["Due date","[DD Month YYYY]"],["Payment terms","[DUE ON RECEIPT / NET 7]"],["Currency symbol","₹"]]},
    {title:"From",fields:[["Your name","[YOUR FULL NAME]"],["Business name","[YOUR BUSINESS NAME]"],["Business address","[YOUR ADDRESS]"],["Tax ID / GSTIN (if applicable)","[YOUR TAX ID]"],["Email","[YOUR EMAIL]"],["Phone","[YOUR PHONE]"]]},
    {title:"Bill to",fields:[["Client name","[CLIENT NAME]"],["Client business","[CLIENT BUSINESS]"],["Client email","[CLIENT EMAIL]"],["Client phone","[CLIENT PHONE]"],["Billing address","[CLIENT ADDRESS]"],["Client tax ID / GSTIN (if applicable)","[CLIENT TAX ID]"],["Project / reference","[PROJECT NAME]"]]},
    {title:"Services & fees",invoice:true},
    {title:"Payment instructions",fields:[["Bank name","[BANK NAME]"],["Account name","[ACCOUNT NAME]"],["Account number / UPI","[ACCOUNT OR UPI]"],["Routing / IFSC","[ROUTING OR IFSC]"],["Payment reference","[INVOICE NUMBER]"],["Accepted methods","[BANK TRANSFER / OTHER]"],["Payment link","[OPTIONAL PAYMENT LINK]"]]},
    {title:"Notes",paragraphs:["Thank you for your business. Please include the invoice number with your payment. For questions about this invoice, contact [EMAIL]."]}
  ];
  if(full) result.splice(5,0,{title:"Milestone & tax details",fields:[["Milestone","[MILESTONE NAME]"],["Purchase order","[PO NUMBER OR N/A]"],["Place of supply (if applicable)","[STATE / COUNTRY]"],["HSN / SAC code (if applicable)","[CODE]"],["Tax category / rate","[REVIEW WITH ACCOUNTANT]"],["Discount / adjustment","[AMOUNT OR N/A]"],["Tax treatment","[REVIEW WITH ACCOUNTANT]"]]});
  return result;
}

const $=(selector,root=document)=>root.querySelector(selector);
const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node};
function editable(value,className=""){const node=el("span",`editable ${className}`.trim(),value);node.contentEditable="true";node.spellcheck=true;node.setAttribute("role","textbox");node.setAttribute("aria-label",value.startsWith("[")?value.replace(/[\[\]]/g,""):"Editable text");if(/^\[[^\]]+\]$/.test(value))node.dataset.placeholder=value;return node}
function removeButton(label){const button=el("button","unit-remove","×");button.type="button";button.setAttribute("aria-label",`Remove ${label}`);button.title=`Remove ${label} (Undo to restore)`;button.contentEditable="false";return button}
function removable(node,label){node.classList.add("removable-unit");node.append(removeButton(label));return node}
function textBlock(value){const p=el("p","text-unit");p.append(editable(value));return removable(p,"paragraph")}
function makeField(label,value){const field=el("div","field"),caption=el("label");caption.append(editable(label));field.append(caption,editable(value));return removable(field,`${label.replace(/[\[\]]/g,"")} field`)}
function makeSection(data){const section=el("section","doc-section"),heading=el("h2");heading.append(editable(data.title));section.append(heading);removable(section,`${data.title.replace(/[\[\]]/g,"")} section`);
  if(data.fields){const grid=el("div","fields");for(const [label,value] of data.fields)grid.append(makeField(label,value));section.append(grid)}
  if(data.paragraphs)for(const paragraph of data.paragraphs)section.append(textBlock(paragraph));
  if(data.bullets){const list=el("div","bullet-list");for(const bullet of data.bullets){const line=el("p","text-unit");line.append(editable(`— ${bullet}`,"inline"));list.append(removable(line,"list item"))}section.append(list)}
  if(data.table){const wrap=el("div","table-scroll"),table=el("table","doc-table"),thead=el("thead"),headRow=el("tr");headRow.append(el("th","row-action"));for(const heading of data.table.headers){const th=el("th");th.append(editable(heading));headRow.append(th)}thead.append(headRow);table.append(thead);const body=el("tbody");for(const row of data.table.rows){const tr=el("tr","removable-unit"),action=el("td","row-action");action.append(removeButton("table row"));tr.append(action);for(const cell of row){const td=el("td");td.append(editable(cell));tr.append(td)}body.append(tr)}table.append(body);wrap.append(table);section.append(wrap)}
  if(data.invoice)section.append(makeInvoiceTable());const add=el("button","add-field-button","+ Field");add.type="button";section.append(add);return section}
function makeInvoiceRow(description="[SERVICE OR MILESTONE]",qty="1",rate="0"){const row=el("tr","removable-unit"),action=el("td","row-action");action.append(removeButton("service row"));row.append(action);for(const [index,value] of [description,qty,rate,"0.00"].entries()){const td=el("td",index===3?"numeric":""),field=editable(value);if(index===1)field.classList.add("qty");if(index===2)field.classList.add("rate");if(index===3)field.classList.add("line-amount");td.append(field);row.append(td)}return row}
function makeInvoiceTable(){const wrap=el("div","table-scroll"),table=el("table","doc-table invoice-table"),thead=el("thead"),headRow=el("tr");headRow.append(el("th","row-action"));for(const heading of ["Description","Qty","Rate","Amount"]){const th=el("th");th.append(editable(heading));headRow.append(th)}thead.append(headRow);table.append(thead);const tbody=el("tbody");for(let i=0;i<3;i++)tbody.append(makeInvoiceRow());table.append(tbody);wrap.append(table);const add=el("button","add-row","+ Add service");add.type="button";wrap.append(add);const tax=el("div","invoice-tax field"),label=el("label");label.append(editable("Tax rate (%)"));tax.append(label,editable("0","tax-rate"));removable(tax,"tax rate field");const totals=el("div","invoice-totals");for(const [name,cls] of [["Subtotal","subtotal"],["Tax","tax-amount"],["Total due","total-due"]]){const row=el("div","total-row"),caption=el("span"),amount=el("strong"),value=editable("0.00",cls);caption.append(editable(name));amount.append(value);row.append(caption,amount);totals.append(removable(row,`${name} total`))}wrap.append(tax,totals);return wrap}
function numberFromText(value){const number=parseFloat(String(value).replace(/[^0-9.,-]/g,"").replace(/,/g,""));return Number.isFinite(number)?number:0}
function invoiceSubtotal(){if($(".subtotal"))return numberFromText($(".subtotal").textContent);return [...($(".invoice-table")?.tBodies[0]?.rows||[])].reduce((sum,row)=>sum+numberFromText($(".line-amount",row)?.textContent),0)}
function updateTotalFromTax(){const subtotal=invoiceSubtotal(),tax=numberFromText($(".tax-amount")?.textContent);if($(".total-due"))$(".total-due").textContent=(subtotal+tax).toFixed(2)}
function updateTotalsFromSubtotal(){const subtotal=invoiceSubtotal(),taxRate=numberFromText($(".tax-rate")?.textContent),tax=subtotal*taxRate/100;if($(".tax-amount"))$(".tax-amount").textContent=tax.toFixed(2);if($(".total-due"))$(".total-due").textContent=(subtotal+tax).toFixed(2)}
function updateTotalsFromAmounts(){const table=$(".invoice-table");if(!table)return;let subtotal=0;for(const row of table.tBodies[0].rows)subtotal+=numberFromText($(".line-amount",row)?.textContent);if($(".subtotal"))$(".subtotal").textContent=subtotal.toFixed(2);updateTotalsFromSubtotal()}
function updateRowAmount(row){const qty=numberFromText($(".qty",row).textContent),rate=numberFromText($(".rate",row).textContent);$(".line-amount",row).textContent=(qty*rate).toFixed(2)}
function updateTotals(){const table=$(".invoice-table");if(!table)return;for(const row of table.tBodies[0].rows)updateRowAmount(row);updateTotalsFromAmounts()}
function renderLibrary(){const grid=$("#collection-grid");for(const [index,id] of collectionIds.entries()){const link=el("a","collection-item");link.href=`editor.html?template=${id}`;link.append(el("span","",String(index+1).padStart(2,"0")),document.createTextNode(details[id].name),el("span","","↗"));grid.append(link)}}
function renderOfferLetter(root){
  root.classList.add("offer-document");
  const pages=[];
  function page(number){
    const sheet=el("section","offer-page"),head=el("header","offer-letterhead"),brand=el("div","offer-letter-brand"),logo=el("img","company-logo"),logoPlaceholder=el("button","offer-logo-placeholder","Add company logo");
    logo.alt="Company logo";logo.hidden=true;
    logoPlaceholder.type="button";logoPlaceholder.setAttribute("aria-label","Add or change company logo");logoPlaceholder.title="Click to upload your company logo";
    const name=el("div","offer-company-name");name.append(editable("[COMPANY NAME]"));
    brand.append(logo,logoPlaceholder,removable(name,"company name"));
    head.append(brand,el("div","offer-letterhead-rule"));
    const body=el("div","offer-page-body"),foot=el("footer","offer-page-footer");
    foot.append(editable("[COMPANY ADDRESS]"),document.createTextNode("  "),editable("|"),document.createTextNode("  "),editable("[COMPANY WEBSITE]"));
    sheet.append(head,body,removable(foot,"company footer"));root.append(sheet);pages.push(sheet);return body;
  }
  function line(label,value,className=""){
    const p=el("p",`offer-line ${className}`.trim()),strong=el("strong");strong.append(editable(label));p.append(strong,document.createTextNode(" "),editable(value,"inline"));return removable(p,label);
  }
  function paragraph(text,className=""){
    const p=el("p",`offer-paragraph ${className}`.trim());p.append(editable(text));return removable(p,"paragraph");
  }
  function heading(text,level="h2"){
    const h=el(level,"offer-heading");h.append(editable(text));return removable(h,`${text} heading`);
  }
  function bullets(items){
    const list=el("ul","offer-bullets");for(const item of items){const li=el("li");li.append(editable(item));list.append(removable(li,"bullet"))}return list;
  }
  function addFields(section){const button=el("button","add-field-button","+ Field");button.type="button";section.append(button)}
  const first=page(1),reference=el("div","offer-reference-row");
  reference.append(removable(el("div","offer-reference-value"),"reference"),removable(el("div","offer-reference-value"),"date"));
  reference.children[0].prepend(editable("[OFFER REFERENCE]"));reference.children[1].prepend(editable("[DD-MM-YYYY]"));first.append(reference);
  const recipient=el("div","offer-recipient");recipient.append(paragraph("To,"),paragraph("[CANDIDATE FULL NAME]"),paragraph("[CANDIDATE PHONE]"),paragraph("[CANDIDATE EMAIL]"),paragraph("[CANDIDATE ADDRESS]"));first.append(recipient);
  first.append(paragraph("Dear [CANDIDATE NAME],","offer-salutation"),paragraph("With reference to your application and interviews, we are pleased to offer you employment on the following terms, subject to the conditions in this letter."));
  const facts=el("section","doc-section offer-block");facts.append(line("Job title:","[JOB TITLE]"),line("Reporting relationship:","[MANAGER NAME / TITLE]"),line("Date of joining:","[DD Month YYYY]"),line("Work location:","[CITY / REMOTE / HYBRID]"),line("Hours of work:","[WORKING DAYS AND HOURS]. Additional work will follow the agreed terms, company policy, and applicable law."));addFields(facts);first.append(facts);
  const checks=el("section","doc-section offer-block");checks.append(heading("Background verification"),paragraph("This offer is conditional on completion of the checks and documents specified below:"),bullets(["[QUALIFICATION / EDUCATION DOCUMENTS]","[PREVIOUS EMPLOYMENT DOCUMENTS, IF REQUIRED]","[IDENTITY AND RIGHT-TO-WORK DOCUMENTS THROUGH A SECURE CHANNEL]"]));addFields(checks);first.append(checks);
  first.append(paragraph("If you agree to this offer, please sign and return a copy by [ACCEPTANCE DEADLINE]."),line("Salary:","Your remuneration and deductions are set out in Annexure A. Amounts and statutory treatment must be checked before issue."));

  const second=page(2);second.append(heading("Annexure A","h1"));
  const meta=el("div","offer-pay-meta");meta.append(line("Name:","[CANDIDATE FULL NAME]"),line("Designation:","[JOB TITLE]"));second.append(meta);
  const scroller=el("div","offer-table-scroll"),table=el("div","offer-pay-table");
  function payRow(cells,kind=""){
    const row=el("div",`offer-pay-row ${kind}`.trim());
    for(const cell of cells){const part=el("div","offer-pay-cell");part.append(editable(cell));row.append(part)}
    return removable(row,`${cells[0]} compensation row`);
  }
  table.append(payRow(["EARNINGS","MONTHLY ([CURRENCY])","YEARLY ([CURRENCY])"],"offer-pay-heading"));
  for(const row of [
    ["Basic salary","[AMOUNT]","[AMOUNT]"],["House rent allowance, if applicable","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["Travel / other allowance","[AMOUNT / N/A]","[AMOUNT / N/A]"],["Special allowance","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["GROSS SALARY (A)","[AMOUNT]","[AMOUNT]"],["DEDUCTIONS","",""],
    ["Employee provident fund, if applicable","[AMOUNT / N/A]","[AMOUNT / N/A]"],["Employee state insurance, if applicable","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["Professional tax / other statutory deduction","[AMOUNT / N/A]","[AMOUNT / N/A]"],["TOTAL DEDUCTIONS (B)","[AMOUNT]","[AMOUNT]"],
    ["NET PAY BEFORE INCOME TAX (A - B)","[AMOUNT]","[AMOUNT]"],["Employer PF / statutory contribution, if applicable","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["Employer insurance / other contribution","[AMOUNT / N/A]","[AMOUNT / N/A]"],["TOTAL EMPLOYER CONTRIBUTIONS (C)","[AMOUNT]","[AMOUNT]"],
    ["TOTAL FIXED CTC (A + C)","[AMOUNT]","[AMOUNT]"],["Variable pay, if applicable","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["TOTAL VARIABLE PAY (D)","[AMOUNT / N/A]","[AMOUNT / N/A]"],
    ["TOTAL CTC (A + C + D)","[AMOUNT]","[AMOUNT]"]
  ])table.append(payRow(row,/^(GROSS|TOTAL|NET PAY|DEDUCTIONS)/.test(row[0])?"offer-pay-summary":""));
  scroller.append(table);second.append(scroller);
  second.append(paragraph("Taxes, statutory contributions, benefits, and variable pay are subject to the applicable rules, eligibility, and the written compensation plan. Verify all totals before issuing this offer.","offer-pay-note"));
  const signatures=el("div","offer-signatures");for(const [title,name,role] of [["Candidate acknowledgement","[CANDIDATE NAME]","[DATE]"],["For the employer","[AUTHORISED SIGNATORY]","[TITLE / DATE]"],["Human resources","[HR CONTACT]","[TITLE / DATE]"]]){const box=el("div","offer-signature-box"),signature=el("div","offer-signature-line");signature.append(editable("[SIGNATURE]"));box.append(signature,paragraph(title),paragraph(name),paragraph(role));signatures.append(box)}second.append(signatures);

  const third=page(3);third.append(heading("Employment - Terms & Conditions","h1"));
  const terms=[
    ["Leave / holidays",["Annual paid leave: [DAYS / POLICY].","Sick leave: [DAYS / POLICY].","Casual or other leave: [DAYS / POLICY].","Declared holidays and leave approval follow the applicable company policy and legal minimums."]],
    ["Notice and separation",["Notice during probation: [PERIOD OR NOT APPLICABLE].","Notice after confirmation: [PERIOD OR POLICY]. Payment in lieu of notice, if permitted, follows the signed employment terms and applicable law.","Any conduct or performance matter will be handled under a fair, documented process and applicable policy; this template does not assume immediate dismissal without required process.","At separation, return company property and authorised copies of work records through the documented handover process. Final pay and statutory benefits will be calculated as required by law."]],
    ["Company policies",["Workplace conduct, safety, confidentiality, data handling, benefits, working hours, and leave follow the policies identified to the employee. Policy changes will be communicated and will not override statutory rights or signed terms without the required process."]]
  ];
  for(const [title,items] of terms){const block=el("section","doc-section offer-block");block.append(heading(title),bullets(items));addFields(block);third.append(block)}
  const law=el("section","doc-section offer-block");law.append(heading("Governing law / jurisdiction"),paragraph("Applicable law: [COUNTRY / STATE]. Dispute process or court jurisdiction: [REVIEWED LOCATION AND TERMS]. Please have this section reviewed for the actual place of employment."));addFields(law);third.append(law);
  try {
    const previous=localStorage.getItem("codebro-client-draft-v2:offer-letter");
    if(previous){
      const button=el("button","tool-button muted-button","Old draft");button.type="button";button.title="Open the previous offer-letter draft saved on this device";
      $("#reset-button")?.before(button);
      button.addEventListener("click",()=>{
        if(button.dataset.open==="true"){location.reload();return}
        try{const saved=JSON.parse(previous);if(!saved?.html)throw Error("No previous draft");root.innerHTML=cleanDraftHtml(saved.html);root.classList.remove("offer-document");button.textContent="New format";button.dataset.open="true";toast("Previous draft opened. Download HTML for a backup; New format reloads this page.")}catch(error){toast("Previous draft could not be opened.")}
      });
    }
  }catch(error){}
  restoreDraft(root,"offer-letter");wireEditor();
}
function normalizeGenericHeader(root){
  const head=$(".doc-head",root);
  if(!head)return;
  let meta=$(".doc-head-meta",head);
  if(!meta){meta=el("div","doc-head-meta");head.append(meta)}
  const title=$(".title-unit",root),label=$(".doc-label",root);
  if(title)meta.append(title);
  if(label)meta.append(label);
}
function renderEditor(){
  const id=new URLSearchParams(location.search).get("template")||document.body.dataset.template||"welcome-doc",data=details[id],root=$("#document");
  if(!data){root.append(el("h1","","Template not found"),textBlock("Return to the library and choose a document."));return}
  document.title=`${data.name} — Client Templates`;root.dataset.template=id;const isHr=data.category==="HR documents";
  if(id==="offer-letter"){renderOfferLetter(root);return}
  if(isHr){const note=$(".editor-note");if(note)note.textContent="HR template: verify facts against personnel/payroll records and review applicable employment law, state rules, contracts, policies, process, notice and entitlements before issuing. Do not put sensitive IDs, bank details, or unsupported allegations in this browser draft on a shared device."}
  const head=el("header","doc-head"),brand=el("div","doc-brand"),logo=el("img","company-logo");logo.alt="Company logo";logo.hidden=true;
  const business=el("div","brand-text-unit"),niche=el("div","brand-text-unit");business.append(editable("[YOUR BUSINESS NAME]"));niche.append(editable(isHr?"[HR / PEOPLE OPERATIONS]":"[YOUR SERVICE / NICHE]"));
  brand.append(logo,removable(business,"business name"),removable(niche,"service or niche"));
  const docLabel=el("div","doc-label");docLabel.append(editable(isHr?"EMPLOYMENT DOCUMENT":"CLIENT DOCUMENT"));head.append(brand,removable(docLabel,"document label"));
  const title=el("h1","doc-title"),titleUnit=el("div","title-unit"),description=el("p","doc-description");title.append(editable(data.name));titleUnit.append(title);description.append(editable(data.description));
  root.append(head,removable(titleUnit,"document title"));if(!isHr)root.append(removable(description,"description"));
  for(const section of data.sections)root.append(makeSection(section));
  const foot=el("footer","doc-footer"),footLeft=el("div","footer-unit"),footRight=el("div","footer-unit");footLeft.append(editable("[YOUR BUSINESS NAME]"));footRight.append(editable(isHr?"Issued for [EMPLOYEE NAME] · [DATE]":"Prepared for [CLIENT NAME] · [DATE]"));foot.append(removable(footLeft,"footer business line"),removable(footRight,"footer client line"));root.append(foot);restoreDraft(root,id);normalizeGenericHeader(root);wireEditor();
}
const draftKey=id=>`codebro-client-draft-${id==="offer-letter"?"v3":"v2"}:${id}`;
const draftSchemaVersion=id=>id==="offer-letter"?4:1;
function cleanDraftHtml(html){const template=document.createElement("template");template.innerHTML=html;template.content.querySelectorAll("script,iframe,object,embed,form,link,meta").forEach(node=>node.remove());template.content.querySelectorAll(".selected-unit,.placeholder-pending").forEach(node=>node.classList.remove("selected-unit","placeholder-pending"));template.content.querySelectorAll("*").forEach(node=>{for(const attribute of [...node.attributes])if(/^on/i.test(attribute.name)||/^(src|href)$/i.test(attribute.name)&&/^(javascript:|data:text\/html)/i.test(attribute.value))node.removeAttribute(attribute.name)});return template.innerHTML}
function restoreDraft(root,id){try{const saved=JSON.parse(localStorage.getItem(draftKey(id))||"null");if(saved?.html){root.innerHTML=cleanDraftHtml(saved.html);if(id==="offer-letter"&&root.classList.contains("offer-document")){
      root.querySelectorAll(".offer-letter-brand").forEach(brand=>{if(brand.querySelector(".offer-logo-placeholder"))return;const button=el("button","offer-logo-placeholder","Add company logo");button.type="button";button.setAttribute("aria-label","Add or change company logo");button.title="Click to upload your company logo";brand.querySelector(".company-logo")?.after(button)});
      root.querySelectorAll(".offer-page-footer").forEach(foot=>{for(const node of [...foot.childNodes])if(node.nodeType===3&&node.textContent.includes("|")){node.replaceWith(document.createTextNode("  "),editable("|"),document.createTextNode("  "))}});
      root.querySelectorAll(".offer-signature-line").forEach(line=>{if(!line.querySelector(".editable"))line.append(editable("[SIGNATURE]"))});
    }
    if(id==="offer-letter"&&(saved.schemaVersion||1)<2){const before=[...root.querySelectorAll(".doc-section")].find(node=>$("h2 .editable",node)?.textContent.trim()==="Conditions before joining")||$(".doc-footer",root);for(const title of ["Standard workplace rules","Policies, changes & separation"]){const exists=[...root.querySelectorAll(".doc-section h2 .editable")].some(node=>node.textContent.trim()===title);if(!exists){const section=makeSection(details[id].sections.find(item=>item.title===title));root.insertBefore(section,before)}}toast("Saved draft restored with new rules. Save Edits to keep them.")}else toast("Saved draft restored on this device.")}}catch(error){console.warn("Could not restore draft",error)}}
function saveDraft(id){try{const clone=$("#document").cloneNode(true);clone.querySelectorAll(".company-logo").forEach(node=>node.removeAttribute("src"));localStorage.setItem(draftKey(id),JSON.stringify({html:cleanDraftHtml(clone.innerHTML),savedAt:new Date().toISOString(),schemaVersion:draftSchemaVersion(id)}));toast("Saved in this browser on this device.")}catch(error){console.error(error);toast("Could not save here. Storage may be full or disabled.")}}
const removedItems=[];
function undoRemoval(){const last=removedItems.pop();if(!last){toast("Nothing to restore.");return}last.parent.insertBefore(last.node,last.next?.parentNode===last.parent?last.next:null);updateTotalsFromAmounts();toast("Restored.")}
function wireEditor(){
  const root=$("#document"),id=root.dataset.template;
  let selectedUnit=null;
  root.querySelectorAll(".editable[data-placeholder]").forEach(field=>field.classList.toggle("unfilled",field.textContent.trim()===field.dataset.placeholder));
  root.querySelectorAll(".selected-unit").forEach(node=>node.classList.remove("selected-unit"));
  function selectPlaceholder(field){
    const selection=window.getSelection(),range=document.createRange();
    range.selectNodeContents(field);
    selection?.removeAllRanges();selection?.addRange(range);
  }
  function selectUnit(unit){
    if(selectedUnit===unit)return;
    selectedUnit?.classList.remove("selected-unit");
    selectedUnit=unit;
    selectedUnit?.classList.add("selected-unit");
  }
  let hasDraft=false;try{hasDraft=!!localStorage.getItem(draftKey(id))}catch(error){}
  if(document.body.dataset.page==="editor"&&!hasDraft)updateTotals();
  root.addEventListener("focusin",event=>{
    const target=event.target;
    if(target.closest(".removable-unit"))selectUnit(target.closest(".removable-unit"));
    if(target.matches(".editable[data-placeholder]")&&target.textContent.trim()===target.dataset.placeholder){target.classList.add("placeholder-pending");selectPlaceholder(target)}
  });
  root.addEventListener("focusout",event=>event.target.classList?.remove("placeholder-pending"));
  root.addEventListener("beforeinput",event=>{
    const field=event.target;
    if(!field.matches?.(".editable.placeholder-pending")||!event.inputType?.startsWith("insert"))return;
    const value=event.data??event.dataTransfer?.getData("text/plain");
    if(value==null||!event.cancelable){selectPlaceholder(field);return}
    event.preventDefault();
    field.textContent=value;
    field.classList.remove("placeholder-pending","unfilled");
    const selection=window.getSelection(),range=document.createRange();
    range.selectNodeContents(field);range.collapse(false);
    selection?.removeAllRanges();selection?.addRange(range);
    field.dispatchEvent(new InputEvent("input",{bubbles:true,inputType:event.inputType,data:value}));
  });
  root.addEventListener("input",event=>{const target=event.target;target.classList?.remove("placeholder-pending");if(target.matches?.(".editable[data-placeholder]"))target.classList.toggle("unfilled",target.textContent.trim()===target.dataset.placeholder);if(target.matches(".qty,.rate")){updateRowAmount(target.closest("tr"));updateTotalsFromAmounts()}else if(target.matches(".tax-rate,.subtotal"))updateTotalsFromSubtotal();else if(target.matches(".line-amount"))updateTotalsFromAmounts();else if(target.matches(".tax-amount"))updateTotalFromTax()});
  root.addEventListener("click",event=>{
    const remove=event.target.closest(".unit-remove"),add=event.target.closest(".add-row"),addField=event.target.closest(".add-field-button");
    if(event.target.closest(".offer-logo-placeholder")){selectUnit(null);$("#logo-input")?.click();return}
    if(remove){
      const unit=remove.closest(".removable-unit");if(!unit)return;
      selectUnit(null);
      removedItems.push({node:unit,parent:unit.parentNode,next:unit.nextSibling});unit.remove();updateTotalsFromAmounts();toast("Removed. Tap Undo to restore.");return;
    }
    if(add){$(".invoice-table tbody").append(makeInvoiceRow());updateTotalsFromAmounts();toast("Service row added.");return}
    if(addField){const section=addField.closest(".doc-section");let grid=$(".fields",section);if(!grid){grid=el("div","fields");section.insertBefore(grid,addField)}const field=makeField("[FIELD LABEL]","[ENTER DETAILS]");grid.append(field);$("label .editable",field).focus();toast("Field added.");return}
    selectUnit(event.target.closest(".removable-unit"));
    const placeholderField=event.target.closest('.editable.placeholder-pending[contenteditable="true"]');
    if(placeholderField)selectPlaceholder(placeholderField);
  });
  document.addEventListener("click",event=>{if(!root.contains(event.target))selectUnit(null)});
  $("#undo-button")?.addEventListener("click",undoRemoval);document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="z"&&!event.target.closest?.("[contenteditable=true]")&&removedItems.length){event.preventDefault();undoRemoval()}});
  $("#add-section-button")?.addEventListener("click",()=>{
    const section=makeSection({title:"[NEW SECTION]",fields:[["[FIELD LABEL]","[ENTER DETAILS]"]]});
    if(root.classList.contains("offer-document")){
      section.classList.add("offer-block");
      const sheet=el("section","offer-page"),head=$(".offer-letterhead",root)?.cloneNode(true),body=el("div","offer-page-body"),foot=$(".offer-page-footer",root)?.cloneNode(true);
      head?.querySelectorAll(".selected-unit").forEach(node=>node.classList.remove("selected-unit"));
      foot?.classList.remove("selected-unit");
      body.append(section);sheet.append(head,body,foot);root.append(sheet);
    }else root.insertBefore(section,$(".doc-footer",root));
    $("h2 .editable",section).focus();section.scrollIntoView({block:"center"});toast("Section added.")
  });
  $("#theme-button")?.addEventListener("click",()=>{document.body.classList.toggle("light");const light=document.body.classList.contains("light");$("#theme-button").textContent=light?"Dark mode":"Light mode";$("#theme-button").setAttribute("aria-pressed",String(light));try{localStorage.setItem("client-kit-theme-v2",light?"light":"dark")}catch(error){}});
  $("#logo-button")?.addEventListener("click",()=>$("#logo-input")?.click());$("#logo-input")?.addEventListener("change",uploadLogo);restoreLogo();
  $("#pdf-button")?.addEventListener("click",()=>window.print());$("#png-button")?.addEventListener("click",exportPng);$("#reset-button")?.addEventListener("click",()=>{if(confirm("Reset this document and delete its saved draft on this device?")){localStorage.removeItem(draftKey(id));location.reload()}});$("#save-button")?.addEventListener("click",()=>saveDraft(id));$("#download-button")?.addEventListener("click",()=>saveStandalone(document.title.replace(" — Client Templates",""),id));}
function showRemoveLogo(){let button=$("#remove-logo-button");if(!button){button=el("button","tool-button muted-button","Remove logo");button.id="remove-logo-button";button.type="button";$("#logo-button").after(button)}button.onclick=()=>{document.querySelectorAll(".company-logo").forEach(logo=>{logo.removeAttribute("src");logo.hidden=true});document.querySelectorAll(".offer-logo-placeholder").forEach(node=>node.hidden=false);$("#logo-button").textContent="Add logo";button.remove();try{localStorage.removeItem("client-kit-logo")}catch(error){}toast("Logo removed.")}}
function restoreLogo(){const logos=[...document.querySelectorAll(".company-logo")];if(!logos.length)return;let source=logos.find(logo=>logo.getAttribute("src"))?.getAttribute("src");if(!source){try{source=localStorage.getItem("client-kit-logo")}catch(error){}}if(source){logos.forEach(logo=>{logo.src=source;logo.hidden=false});document.querySelectorAll(".offer-logo-placeholder").forEach(node=>node.hidden=true);$("#logo-button").textContent="Change logo";showRemoveLogo()}}
function uploadLogo(event){const file=event.target.files?.[0];if(!file)return;if(!["image/png","image/jpeg","image/webp"].includes(file.type)||file.size>1500000){toast("Use a PNG, JPG or WebP logo under 1.5 MB.");return}const reader=new FileReader();reader.onload=()=>{document.querySelectorAll(".company-logo").forEach(logo=>{logo.src=reader.result;logo.hidden=false});document.querySelectorAll(".offer-logo-placeholder").forEach(node=>node.hidden=true);$("#logo-button").textContent="Change logo";showRemoveLogo();try{localStorage.setItem("client-kit-logo",reader.result)}catch(error){toast("Logo added here, but browser storage is full.");return}toast("Logo added to your templates.")};reader.readAsDataURL(file)}
async function exportPng(){const button=$("#png-button"),root=$("#document");if(typeof html2canvas!=="function"){toast("PNG tool did not load. Please reload the page.");return}button.disabled=true;button.textContent="Preparing PNG…";try{const width=root.scrollWidth,height=root.scrollHeight,scale=Math.min(2,Math.sqrt(14000000/(width*height)));const canvas=await html2canvas(root,{backgroundColor:"#ffffff",scale,useCORS:true,scrollX:0,scrollY:-window.scrollY,onclone:doc=>{doc.body.classList.add("light");doc.querySelectorAll(".add-row,.add-field-button,.unit-remove,.row-action,.offer-logo-placeholder").forEach(node=>node.remove());doc.querySelectorAll(".editable").forEach(node=>{node.style.borderBottom="0";node.style.background="transparent"})}});const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/png"));if(!blob)throw Error("Canvas export failed");const url=URL.createObjectURL(blob),link=el("a");link.href=url;link.download=`client-kit-${root.dataset.template||"document"}.png`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);toast("PNG downloaded.")}catch(error){console.error(error);toast("PNG export failed. Try PDF or a smaller logo.")}finally{button.disabled=false;button.textContent="Save as PNG"}}
function toast(message){const bar=$("#toast");if(!bar)return;bar.textContent=message;bar.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>bar.classList.remove("show"),3200)}
async function saveStandalone(name,id){try{
    const css=$("style[data-kit-style]")?.textContent||await fetch("style.css").then(r=>r.text());
    const js=$("script[data-kit-runtime]")?.textContent||await fetch("app.js").then(r=>r.text());
    const capture=$("script[data-kit-capture]")?.textContent||await fetch(new URL("../vendor/html2canvas.min.js",location.href)).then(r=>r.text());
    const clone=$("#document").cloneNode(true);
    clone.querySelectorAll(".selected-unit").forEach(node=>node.classList.remove("selected-unit"));
    const light=document.body.classList.contains("light")?" light":"";
    const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(name)} — Client Templates</title><style data-kit-style>${css.replace(/<\/style/gi,"<\\/style")}</style></head><body data-page="standalone" class="${light.trim()}"><div class="editor-toolbar" role="toolbar" aria-label="Document tools"><span class="back-link">CLIENT TEMPLATES</span><div class="toolbar-actions"><button id="undo-button" class="tool-button muted-button" type="button">Undo</button><button id="logo-button" class="tool-button" type="button">Add logo</button><button id="add-section-button" class="tool-button" type="button">+ Section</button><button id="theme-button" class="tool-button muted-button" type="button">${light?"Dark mode":"Light mode"}</button><button id="save-button" class="tool-button" type="button">Save Edits</button><button id="download-button" class="tool-button" type="button">Download HTML</button><button id="pdf-button" class="tool-button primary-button" type="button">Save as PDF</button><button id="png-button" class="tool-button primary-button" type="button">Save as PNG</button></div></div><input id="logo-input" type="file" accept="image/png,image/jpeg,image/webp" hidden><main class="editor-shell"><article id="document" class="${escapeHtml(clone.className)}" data-template="${escapeHtml(id)}">${clone.innerHTML}</article></main><div id="toast" class="toast" role="status" aria-live="polite"></div><script data-kit-capture>${capture.replace(/<\/script/gi,"<\\/script")}<\/script><script data-kit-runtime>${js.replace(/<\/script/gi,"<\\/script")}<\/script></body></html>`;
    const offerFontStyle=id==="offer-letter"?$("style[data-kit-offer-font]")?.outerHTML||"":"";
    const bundledHtml=offerFontStyle?html.replace("</head>",`${offerFontStyle}</head>`):html;
    const url=URL.createObjectURL(new Blob([bundledHtml],{type:"text/html"})),link=el("a");link.href=url;link.download=`client-kit-${id}-edited.html`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);toast("Editable HTML downloaded.")
  }catch(error){toast("Save failed. Please try again.");console.error(error)}}
function escapeHtml(text){return text.replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char])}
if(document.body.dataset.page==="library")renderLibrary();if(document.body.dataset.page==="editor"){try{if(localStorage.getItem("client-kit-theme-v2")==="light")document.body.classList.add("light")}catch(error){}const themeButton=$("#theme-button");if(themeButton){const light=document.body.classList.contains("light");themeButton.textContent=light?"Dark mode":"Light mode";themeButton.setAttribute("aria-pressed",String(light))}renderEditor()}if(document.body.dataset.page==="standalone")wireEditor();
