// Renders schema.org structured data as a native <script> tag, per Next.js'
// current JSON-LD guidance (next/script is for executable JS, not data).
// `<` is escaped to its unicode form to prevent injection via untrusted strings
// landing inside the JSON payload (e.g. a CMS-editable product description).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
