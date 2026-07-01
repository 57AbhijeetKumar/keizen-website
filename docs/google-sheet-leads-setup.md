# Google Sheet lead capture — setup

One-time setup so every "Get a Quote" / contact / brochure-request submission
appends a row to a Google Sheet you control.

## 1. Create the Sheet

1. Create a new Google Sheet (e.g. "Kaizen Laser — Website Leads").
2. In row 1, add these column headers, in this order:
   `Timestamp | Source | Name | Email | Phone | Message | Product`

## 2. Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete any starter code and paste this:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  // Explicit IST formatting — independent of the script project's or
  // spreadsheet's timezone setting, so this is never wrong regardless of
  // either's configuration.
  const timestamp = Utilities.formatDate(
    new Date(),
    "Asia/Kolkata",
    "dd MMM yyyy, hh:mm a"
  );

  sheet.appendRow([
    timestamp,
    data.source || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.message || "",
    data.productSlug || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name the project something like "Lead Webhook").

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" → choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, authorize it with your Google account when prompted.
5. Copy the **Web app URL** it gives you — looks like
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Give me the URL

Send me that URL — I'll add it as an environment variable
(`LEADS_SHEET_WEBHOOK_URL`) and wire it into the lead form so every
submission lands in the Sheet automatically.

This URL is *not* what you share with your sales team — it's a write-only
endpoint the website uses to add rows. Keep it private, just like a password.

## 5. Share the Sheet with your sales team

This is separate from step 4 — use the Sheet's own **Share** button (top
right of the Sheet, not Apps Script):

1. Click **Share**.
2. Add your sales team's email addresses.
3. Set their role to **Viewer** (not Editor) — they can open, view, and
   download the Sheet (File → Download → Microsoft Excel/CSV), but can't
   edit or delete leads.
4. Send them that share link directly, or use **Share → Copy link** (with
   general access set to "Anyone with the link – Viewer" if you'd rather not
   add individual emails).

## Updating later

If you ever need to point this at a different Sheet, just repeat steps 1–3
on the new Sheet and send me the new URL — no other code changes needed.
