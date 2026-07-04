/**
 * Redirects the browser to the Google Drive direct-download URL.
 *
 * Proxying (server-side fetch) does not work because drive.usercontent.google.com
 * requires the user's browser cookies to serve the file — a server fetch has none.
 * Redirecting lets the browser complete the download directly with Drive, which
 * works for any publicly shared file.
 *
 * To update the catalog: replace the file in Drive via
 * Manage versions → Upload new version (same file ID, no redeploy needed).
 */
export async function GET() {
  const fileId = process.env.BROCHURE_DRIVE_FILE_ID;

  if (!fileId) {
    return new Response("Catalog not configured yet.", { status: 404 });
  }

  const driveDownloadUrl =
    `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`;

  return Response.redirect(driveDownloadUrl, 302);
}
