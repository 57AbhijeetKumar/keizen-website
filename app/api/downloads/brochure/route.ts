/**
 * Proxies the company brochure from Google Drive instead of linking to it
 * directly: gives a stable URL (`/api/downloads/brochure`) and a clean
 * filename regardless of what the file is named in Drive, and always
 * re-fetches the current file — so replacing the file in Drive (same file,
 * not a new upload) is reflected immediately, no redeploy needed.
 */
export async function GET() {
  const fileId = process.env.BROCHURE_DRIVE_FILE_ID;

  if (!fileId) {
    return new Response("Brochure not configured yet.", { status: 404 });
  }

  const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  let upstream: Response;
  try {
    upstream = await fetch(driveUrl, { cache: "no-store" });
  } catch (error) {
    console.error("[brochure:fetch-failed]", error);
    return new Response("Could not reach the brochure file. Please try again shortly.", {
      status: 502,
    });
  }

  if (!upstream.ok) {
    console.error("[brochure:upstream-error]", upstream.status);
    return new Response("Brochure is temporarily unavailable.", { status: 502 });
  }

  const contentType = upstream.headers.get("content-type") ?? "";

  // Large/abuse-flagged Drive files serve an HTML "can't scan for viruses"
  // confirmation page instead of the file — this brochure is well under that
  // threshold, but detect it defensively rather than silently serving HTML
  // as if it were the PDF.
  if (contentType.includes("text/html")) {
    console.error("[brochure:unexpected-html]", "Drive returned an interstitial page, not the file.");
    return new Response("Brochure download is temporarily unavailable. Please contact us directly.", {
      status: 502,
    });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="kaizen-laser-brochure.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
