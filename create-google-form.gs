/**
 * KAIZEN LASER — WEBSITE DATA COLLECTION FORM
 * ─────────────────────────────────────────────
 * HOW TO RUN THIS SCRIPT:
 *
 * 1. Go to https://script.google.com
 * 2. Click "New Project"
 * 3. Delete everything in the editor
 * 4. Paste this entire script
 * 5. Click the floppy disk icon (Save) — name it anything
 * 6. Click "Run" (▶ play button)
 * 7. Google will ask for permission — click "Review Permissions"
 *    → Choose your Google account → Click "Advanced" → "Go to project (unsafe)" → Allow
 * 8. Wait 10–15 seconds — the script runs
 * 9. Click "Drive" in the top-left Google apps menu
 *    → You will find a new Google Form named "Kaizen Laser — Website Information"
 * 10. Open the form, click the 3-dot menu → "Get pre-filled link" to preview it
 * 11. To share: click the "Send" button on the form → enter owner's email
 *
 * NOTE: Replace WHATSAPP_NUMBER below with your actual WhatsApp number.
 */

var WHATSAPP_NUMBER = "+91 77199 66792"; // ← Change this to your number

function createKaizenWebsiteForm() {

  var form = FormApp.create("Kaizen Laser — Website Information Required");

  form.setDescription(
    "Dear Sir/Ma'am,\n\n" +
    "This form collects the information needed to complete the Kaizen Laser website professionally.\n\n" +
    "📌 Please fill every section you can — the more information you provide, the more professional and trustworthy your website will look to potential customers.\n\n" +
    "📸 FOR ALL PHOTOS AND IMAGES:\n" +
    "Please send photos directly on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
    "Label each photo clearly (e.g. 'Factory Photo', 'ISO Certificate', 'Pluto Machine Photo').\n\n" +
    "⏱ Expected time to complete: 20–30 minutes.\n\n" +
    "Thank you!"
  );

  form.setIsQuiz(false);
  form.setCollectEmail(true);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage(
    "Thank you! Your information has been submitted successfully.\n\n" +
    "Please also send all PHOTOS and CERTIFICATES on WhatsApp to: " + WHATSAPP_NUMBER + "\n\n" +
    "Label each photo clearly, for example:\n" +
    "• 'Factory Photo 1', 'Factory Photo 2'\n" +
    "• 'ISO Certificate'\n" +
    "• 'Team Photo — [Name]'\n" +
    "• 'Customer Installation — [City]'\n" +
    "• 'Product Photo — Pluto Machine'"
  );


  // ═══════════════════════════════════════════
  // SECTION 1 — COMPANY IDENTITY
  // ═══════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle("SECTION 1 — Company Identity")
    .setHelpText(
      "This information appears on every page of the website — footer, About page, Contact page and Google search results. " +
      "Please fill all fields accurately."
    );

  form.addTextItem()
    .setTitle("1.1  Full legal company name (as registered)")
    .setHelpText("Example: Kaizen Laser and Automation Private Limited")
    .setRequired(true);

  form.addTextItem()
    .setTitle("1.2  Year the company was founded / established")
    .setHelpText("Example: 2016")
    .setRequired(true);

  form.addTextItem()
    .setTitle("1.3  GST Number (optional — shown for trust)")
    .setHelpText("Example: 09ABCDE1234F1Z5");

  form.addTextItem()
    .setTitle("1.4  MSME / Udyam Registration Number (if available)")
    .setHelpText("Example: UDYAM-UP-00-0000000");

  form.addTextItem()
    .setTitle("1.5  Registered / factory address (full with PIN code)")
    .setHelpText("Example: Plot No. E-86, Noida Sector-63, Noida, UP 201301")
    .setRequired(true);

  form.addTextItem()
    .setTitle("1.6  Primary contact phone number (shown in website header)")
    .setRequired(true);

  form.addTextItem()
    .setTitle("1.7  Second phone number (if any)");

  form.addTextItem()
    .setTitle("1.8  Primary email address")
    .setHelpText("Example: info@kaizenlaser.in")
    .setRequired(true);

  form.addTextItem()
    .setTitle("1.9  Sales email address")
    .setHelpText("Example: sales@kaizenlaser.in");

  form.addTextItem()
    .setTitle("1.10  WhatsApp number for website chat button")
    .setRequired(true);


  // ═══════════════════════════════════════════
  // SECTION 2 — BUSINESS STATISTICS
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 2 — Business Statistics")
    .setHelpText(
      "These numbers appear on the homepage in a 'stats bar'. " +
      "They are one of the most trust-building elements on any B2B website. " +
      "Approximate numbers are fine (e.g. '50+' instead of exact 53). " +
      "Even conservative numbers are better than showing nothing."
    );

  form.addTextItem()
    .setTitle("2.1  Approximate total number of machines installed to date")
    .setHelpText("Example: 500+ or 200 or 80")
    .setRequired(true);

  form.addTextItem()
    .setTitle("2.2  Approximate number of customers / clients served")
    .setHelpText("Example: 50+ or 30")
    .setRequired(true);

  form.addTextItem()
    .setTitle("2.3  Number of states / cities where machines are installed")
    .setHelpText("Example: 8 states or 15 cities");

  form.addTextItem()
    .setTitle("2.4  Number of industries served")
    .setHelpText("Example: 5 (Automotive, Electronics, Pharma, Defence, Fabrication)");

  form.addTextItem()
    .setTitle("2.5  Any other number you are proud of")
    .setHelpText("Example: '5,00,000+ parts marked daily' or '10+ years of experience'");


  // ═══════════════════════════════════════════
  // SECTION 3 — CERTIFICATIONS & STANDARDS
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 3 — Certifications & Standards")
    .setHelpText(
      "⚠️ CRITICAL: Most Indian OEM procurement teams require ISO-certified vendors. " +
      "If buyers cannot see certification instantly on your website, they move on to a competitor. " +
      "Please provide certificate details and send photos/scans on WhatsApp to: " + WHATSAPP_NUMBER
    );

  form.addMultipleChoiceItem()
    .setTitle("3.1  Is the company ISO certified?")
    .setChoiceValues(["Yes", "No", "In process"])
    .setRequired(true);

  form.addTextItem()
    .setTitle("3.2  If ISO certified — which standard?")
    .setHelpText("Example: ISO 9001:2015");

  form.addTextItem()
    .setTitle("3.3  ISO Certificate number and expiry date")
    .setHelpText("Example: Cert No. IN12345, valid until Dec 2026");

  form.addMultipleChoiceItem()
    .setTitle("3.4  Are your machines CE marked?")
    .setChoiceValues(["Yes — all models", "Yes — some models", "No", "Not applicable"]);

  form.addCheckboxItem()
    .setTitle("3.5  Any other certifications or registrations (select all that apply)")
    .setChoiceValues([
      "BIS Certification",
      "NSIC Registration",
      "MSME Udyam Registration",
      "Make in India Registered",
      "StartupIndia Recognition",
      "GeM Portal Registered",
      "Defence DPIIT Registration",
      "Other"
    ]);

  form.addTextItem()
    .setTitle("3.6  If 'Other' certification — please name it");

  form.addTextItem()
    .setTitle("3.7  Any government awards, recognitions or scheme memberships")
    .setHelpText("Example: NSIC Award 2023, Export Excellence Award, etc.");

  form.addSectionHeaderItem()
    .setTitle("📸 Certification Photos — Send on WhatsApp")
    .setHelpText(
      "Please take a clear photo of each certificate you have and send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label each photo as:\n" +
      "• 'ISO Certificate'\n" +
      "• 'CE Certificate'\n" +
      "• 'MSME Certificate'\n" +
      "• Any other certificate name"
    );

  form.addMultipleChoiceItem()
    .setTitle("3.8  Have you sent certificate photos on WhatsApp?")
    .setChoiceValues(["Yes, sent", "Will send shortly", "Do not have certificates yet"]);


  // ═══════════════════════════════════════════
  // SECTION 4 — CUSTOMERS & TESTIMONIALS
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 4 — Customers & Testimonials")
    .setHelpText(
      "Customer logos and testimonials are the SINGLE MOST IMPORTANT trust-building element on a B2B website. " +
      "Competitors like Bradma show 25+ customer logos including Bajaj, Honda and Mahindra. " +
      "Even 5–6 logos will dramatically improve how professional your website looks."
    );

  form.addParagraphTextItem()
    .setTitle("4.1  List your customer company names (one per line)")
    .setHelpText(
      "Include any company that has bought a machine from you. " +
      "We will contact you separately about permission to show their logo. " +
      "Example:\nBajaj Auto\nHero MotoCorp\nTata Motors\nMaruti Suzuki"
    )
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("4.2  Are you comfortable showing customer company names on the website?")
    .setChoiceValues([
      "Yes — can show names and logos",
      "Yes — can show names only (no logos)",
      "Only with customer permission first",
      "No — prefer to show industry type only (e.g. 'Automotive Tier-1')"
    ])
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle("📸 Customer Logo Photos — Send on WhatsApp")
    .setHelpText(
      "If you have printed materials, visiting cards, or letterheads from your customers with their logo, " +
      "please photograph them and send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label as: 'Customer Logo — [Company Name]'\n\n" +
      "OR simply write the company name in the field above and we will source the logo online."
    );

  form.addParagraphTextItem()
    .setTitle("4.3  Customer Testimonial 1")
    .setHelpText(
      "Format:\n" +
      "Customer Name: ___\n" +
      "Designation: ___ (e.g. Production Manager)\n" +
      "Company: ___ (can be 'XYZ Pvt Ltd, Pune' if name is confidential)\n" +
      "Machine purchased: ___\n" +
      "What they said: \"___\"\n\n" +
      "You can also copy-paste a WhatsApp message, email or Google review."
    );

  form.addParagraphTextItem()
    .setTitle("4.4  Customer Testimonial 2")
    .setHelpText("Same format as above");

  form.addParagraphTextItem()
    .setTitle("4.5  Customer Testimonial 3")
    .setHelpText("Same format as above");

  form.addParagraphTextItem()
    .setTitle("4.6  Any customer Google reviews, WhatsApp messages or emails praising the product?")
    .setHelpText("Paste the text here. We will format it properly on the website.");


  // ═══════════════════════════════════════════
  // SECTION 5 — PRODUCT INFORMATION
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 5 — Product Information")
    .setHelpText(
      "Every product page currently shows 'Datasheet not available yet'. " +
      "If you have any printed spec sheets, brochures or PDF datasheets — send them on WhatsApp."
    );

  form.addCheckboxItem()
    .setTitle("5.1  Which machines do you have a datasheet / spec sheet for?")
    .setChoiceValues([
      "Pluto (Fiber Laser)",
      "Venus (UV Laser)",
      "Neptune (CO₂ Laser)",
      "Mercury (Safety Cabinet)",
      "Jupiter (Compact Head)",
      "Mars (Dot Peen)",
      "Kai-Weld (Laser Welding)",
      "Kai-Cut (Laser Cutting)",
      "Kai-Clean (Laser Cleaning)",
      "None yet"
    ]);

  form.addSectionHeaderItem()
    .setTitle("📸 Datasheet / Spec Sheet Photos — Send on WhatsApp")
    .setHelpText(
      "If you have printed spec sheets — take a clear photo and send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label each as: 'Datasheet — [Machine Name]'\n" +
      "Example: 'Datasheet — Pluto', 'Datasheet — Mercury'\n\n" +
      "If you have a PDF version, send that directly on WhatsApp."
    );

  form.addMultipleChoiceItem()
    .setTitle("5.2  Have you sent datasheets on WhatsApp?")
    .setChoiceValues(["Yes, sent", "Will send shortly", "Do not have any yet"]);

  form.addParagraphTextItem()
    .setTitle("5.3  Are there any products or services NOT yet on the website that should be added?")
    .setHelpText(
      "Example:\n" +
      "Product: Rotary Marking Fixture\n" +
      "Description: Used for marking cylindrical parts like shafts and pipes\n" +
      "Price range: ₹50,000 – ₹80,000"
    );


  // ═══════════════════════════════════════════
  // SECTION 6 — PHOTOS & IMAGES
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 6 — Photos & Images")
    .setHelpText(
      "📸 ALL PHOTOS IN THIS SECTION — Please send directly on WhatsApp to: " + WHATSAPP_NUMBER + "\n\n" +
      "Any modern smartphone photo is perfectly fine — WhatsApp quality is acceptable.\n" +
      "Please use the labels given below for each photo so we know what it is."
    );

  form.addCheckboxItem()
    .setTitle("6.1  Factory / Manufacturing Unit Photos — Which of these can you photograph and send?")
    .setHelpText(
      "📸 Send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label each as: 'Factory Photo — [description]'\n" +
      "Example: 'Factory Photo — Assembly Area', 'Factory Photo — Company Entrance'"
    )
    .setChoiceValues([
      "Overall view of factory floor / assembly area",
      "Machines being assembled or tested",
      "Quality testing / calibration station",
      "Laser beam being focused on a part (machine in operation)",
      "Packaged machines ready for dispatch",
      "Company name board / entrance",
      "Office area / reception"
    ]);

  form.addMultipleChoiceItem()
    .setTitle("6.2  Can you send factory photos this week?")
    .setChoiceValues(["Yes", "Within 2 weeks", "Need help — unsure what to photograph"])
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle("📸 Team / Founder Photos — Send on WhatsApp")
    .setHelpText(
      "Please send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "• Founder photo: label as 'Founder Photo — [Name]'\n" +
      "• Team photos: label as 'Team Photo — [Name and Designation]'\n\n" +
      "A professional headshot or even a good smartphone photo works perfectly."
    );

  form.addTextItem()
    .setTitle("6.3  Founder full name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("6.4  Founder designation / title")
    .setHelpText("Example: Founder & Managing Director, CEO, Proprietor");

  form.addParagraphTextItem()
    .setTitle("6.5  Founder short bio (3–5 sentences)")
    .setHelpText(
      "Example: 'Mr. Abhijeet Kumar has 12 years of experience in industrial laser systems. " +
      "He founded Kaizen Laser in 2016 with a vision to bring international-grade laser technology " +
      "to Indian manufacturers at competitive pricing. Under his leadership, Kaizen has installed " +
      "500+ machines across Automotive, Electronics and Industrial sectors.'"
    );

  form.addMultipleChoiceItem()
    .setTitle("6.6  Have you sent founder / team photos on WhatsApp?")
    .setChoiceValues(["Yes, sent", "Will send shortly", "Prefer not to show team photos"]);

  form.addSectionHeaderItem()
    .setTitle("📸 Customer Installation Photos — Send on WhatsApp")
    .setHelpText(
      "Please send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label as: 'Installation Photo — [City or Industry]'\n" +
      "Example: 'Installation Photo — Pune Automotive', 'Installation Photo — Delhi Factory'\n\n" +
      "Customer name does NOT need to be visible. " +
      "Even photos of your machine sitting on someone's production floor are perfect."
    );

  form.addMultipleChoiceItem()
    .setTitle("6.7  Do you have photos of machines installed at customer sites?")
    .setChoiceValues(["Yes — will send on WhatsApp", "Have some — will collect and send", "No photos available"])
    .setRequired(true);

  form.addSectionHeaderItem()
    .setTitle("📸 Product Demo Video — Send on WhatsApp")
    .setHelpText(
      "A 30–60 second video of your machine marking a part is the HIGHEST IMPACT addition to the website.\n\n" +
      "What to record:\n" +
      "• Machine running — marking a metal part with laser\n" +
      "• Show the part before and after marking\n" +
      "• Can be filmed on any smartphone\n\n" +
      "Send on WhatsApp to: " + WHATSAPP_NUMBER + "\n" +
      "Label as: 'Demo Video — [Machine Name]'\n" +
      "Example: 'Demo Video — Pluto Marking Steel Part'"
    );

  form.addMultipleChoiceItem()
    .setTitle("6.8  Can you record and send a machine demo video?")
    .setChoiceValues([
      "Yes — will send on WhatsApp this week",
      "Yes — but need a few weeks",
      "Already have a video — will send",
      "Not possible right now"
    ])
    .setRequired(true);


  // ═══════════════════════════════════════════
  // SECTION 7 — SOCIAL MEDIA
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 7 — Social Media & Online Presence")
    .setHelpText(
      "These links appear in the website footer and help with Google search rankings."
    );

  form.addTextItem()
    .setTitle("7.1  LinkedIn Company Page URL")
    .setHelpText("Example: https://www.linkedin.com/company/kaizenlaserandautomation/");

  form.addTextItem()
    .setTitle("7.2  YouTube Channel URL (if any)")
    .setHelpText("Example: https://www.youtube.com/@kaizenlaser");

  form.addTextItem()
    .setTitle("7.3  Instagram handle (if any)")
    .setHelpText("Example: @kaizenlaser");

  form.addTextItem()
    .setTitle("7.4  Facebook Page URL (if any)");

  form.addTextItem()
    .setTitle("7.5  IndiaMART listing URL (if any)");

  form.addMultipleChoiceItem()
    .setTitle("7.6  Is your Google Business Profile (Google Maps) claimed and verified?")
    .setChoiceValues([
      "Yes — it is claimed and verified",
      "Yes — claimed but not verified",
      "No — not yet claimed",
      "Not sure"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("7.7  How many Google reviews do you currently have?")
    .setHelpText("Go to Google Maps, search your company name, and check the review count.");


  // ═══════════════════════════════════════════
  // SECTION 8 — SERVICE NETWORK
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 8 — Service Network")
    .setHelpText(
      "The website currently says you have service support in 5 cities. " +
      "Please confirm which cities are accurate."
    );

  form.addCheckboxItem()
    .setTitle("8.1  Which cities do you have service engineers / support in?")
    .setChoiceValues([
      "Delhi-NCR (Noida / Gurgaon / Faridabad)",
      "Pune",
      "Bengaluru",
      "Chennai",
      "Tata Nagar (Jamshedpur)",
      "Hyderabad",
      "Ahmedabad",
      "Mumbai",
      "Kolkata",
      "Indore",
      "Ludhiana",
      "Other"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("8.2  If 'Other' city — please name them");

  form.addTextItem()
    .setTitle("8.3  What is your typical response time for a service call?")
    .setHelpText("Example: Same day for Delhi-NCR, 24–48 hours for other cities");


  // ═══════════════════════════════════════════
  // SECTION 9 — ABOUT THE COMPANY
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 9 — About the Company")
    .setHelpText(
      "This content goes on the About page. A personal, authentic story about why you started the company " +
      "builds more trust than any technical specification."
    );

  form.addParagraphTextItem()
    .setTitle("9.1  Why did you start Kaizen Laser? (The founding story)")
    .setHelpText(
      "In your own words — even 2–3 sentences. " +
      "Example: 'I saw that Indian manufacturers were paying 3× the price for imported laser machines " +
      "with no local service support. I started Kaizen to give them the same quality at a fair price " +
      "with engineers who could reach their factory the next day.'"
    )
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("9.2  What makes Kaizen different from other laser machine companies in India?")
    .setHelpText("List 3–5 points in your own words. Be specific — not just 'quality and service'.")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("9.3  What is your vision for Kaizen in the next 3–5 years?")
    .setHelpText("Example: Expand to 10 service cities, launch 3 new product lines, export to Southeast Asia");

  form.addTextItem()
    .setTitle("9.4  Number of employees / team size")
    .setHelpText("Approximate is fine — Example: 15–20 people");


  // ═══════════════════════════════════════════
  // SECTION 10 — CASE STUDIES
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 10 — Customer Success Stories (Case Studies)")
    .setHelpText(
      "A case study is a short story: Customer had Problem → You provided Machine → Result was X. " +
      "These are extremely powerful for convincing new buyers. Customer name can be kept confidential. " +
      "Even 2 case studies will significantly improve conversions."
    );

  form.addParagraphTextItem()
    .setTitle("10.1  Case Study 1")
    .setHelpText(
      "Format:\n" +
      "Industry: ___\n" +
      "Location: ___\n" +
      "Problem they had: ___\n" +
      "Machine / solution you provided: ___\n" +
      "Result: ___\n" +
      "Can we mention customer name? Yes / No\n\n" +
      "Example:\n" +
      "Industry: Automotive Tier-1\n" +
      "Location: Pune\n" +
      "Problem: Manual marking causing errors, no traceability for OEM audit\n" +
      "Solution: Mercury machine with KAI-TRACK software\n" +
      "Result: Zero marking errors, 100% traceability compliance, OEM audit passed\n" +
      "Customer name: Confidential"
    );

  form.addParagraphTextItem()
    .setTitle("10.2  Case Study 2")
    .setHelpText("Same format as above");

  form.addParagraphTextItem()
    .setTitle("10.3  Case Study 3")
    .setHelpText("Same format as above");


  // ═══════════════════════════════════════════
  // SECTION 11 — COMPANY LOGO & BRAND ASSETS
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 11 — Logo & Brand Assets")
    .setHelpText(
      "📸 Send all logo files on WhatsApp to: " + WHATSAPP_NUMBER + "\n\n" +
      "Required files:\n" +
      "• Company logo on WHITE background (PNG format preferred)\n" +
      "• Company logo on DARK/BLACK background (for header)\n" +
      "• If you have an AI / EPS / SVG file — please send that too (highest quality)\n\n" +
      "Label as: 'Logo — White BG' and 'Logo — Dark BG'"
    );

  form.addMultipleChoiceItem()
    .setTitle("11.1  Do you have a high-resolution company logo file?")
    .setChoiceValues([
      "Yes — PNG file available, will send on WhatsApp",
      "Yes — AI / EPS / SVG file available, will send on WhatsApp",
      "Only have logo as part of a document or letterhead",
      "No separate logo file — need logo to be redesigned"
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle("11.2  Brand / company colours (if defined)")
    .setHelpText("Example: Blue (#003087) and Orange (#FF6B00), or just 'Blue and Orange'");

  form.addMultipleChoiceItem()
    .setTitle("11.3  Have you sent logo files on WhatsApp?")
    .setChoiceValues(["Yes, sent", "Will send shortly", "Need help with logo"]);


  // ═══════════════════════════════════════════
  // SECTION 12 — ANYTHING ELSE
  // ═══════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle("SECTION 12 — Anything Else")
    .setHelpText("Any additional information, special requests, or questions for the website developer.");

  form.addParagraphTextItem()
    .setTitle("12.1  Is there anything important about your company or products that we have NOT asked about?")
    .setHelpText("Any unique selling point, upcoming product launch, export activity, major client win, award, etc.");

  form.addParagraphTextItem()
    .setTitle("12.2  Any specific page or feature you want on the website that is not currently there?");

  form.addParagraphTextItem()
    .setTitle("12.3  Any competitor website you like the look or feel of?")
    .setHelpText("Share the URL or name of the website. Example: www.sltl.com, www.purshotam.com");

  form.addTextItem()
    .setTitle("12.4  Your name (person filling this form)")
    .setRequired(true);

  form.addTextItem()
    .setTitle("12.5  Your designation")
    .setHelpText("Example: Owner, Marketing Manager, Operations Head");

  // ─── Final reminder ─────────────────────────────────────────
  form.addSectionHeaderItem()
    .setTitle("📸 FINAL REMINDER — Send All Photos on WhatsApp")
    .setHelpText(
      "Please send the following on WhatsApp to: " + WHATSAPP_NUMBER + "\n\n" +
      "1. Factory / Workshop photos → Label: 'Factory Photo — [description]'\n" +
      "2. ISO / CE Certificate → Label: 'ISO Certificate'\n" +
      "3. Company Logo (high-res PNG) → Label: 'Logo — White BG' and 'Logo — Dark BG'\n" +
      "4. Founder / Team photos → Label: 'Founder Photo — [Name]'\n" +
      "5. Customer Installation photos → Label: 'Installation Photo — [City]'\n" +
      "6. Machine Datasheets (PDF or photo) → Label: 'Datasheet — [Machine Name]'\n" +
      "7. Demo Video of machine in operation → Label: 'Demo Video — [Machine Name]'\n" +
      "8. Customer logo / visiting card photos → Label: 'Customer Logo — [Company Name]'\n\n" +
      "Thank you for taking the time to fill this out. " +
      "This information will make your website significantly more professional and will bring more genuine customer inquiries."
    );

  // ─── Log the form URL ─────────────────────────────────────────
  Logger.log("✅ Form created successfully!");
  Logger.log("📋 EDIT URL (for you): " + form.getEditUrl());
  Logger.log("🔗 SHARE URL (for owner): " + form.getPublishedUrl());
  Logger.log("📊 RESPONSES URL: " + form.getEditUrl().replace("/edit", "/viewanalytics"));
  Logger.log("");
  Logger.log("▶ NEXT STEPS:");
  Logger.log("1. Open the SHARE URL above and send it to the company owner");
  Logger.log("2. Responses will appear in the form's 'Responses' tab automatically");
  Logger.log("3. Click 'Link to Sheets' in the Responses tab to get a Google Sheet with all answers");
}
