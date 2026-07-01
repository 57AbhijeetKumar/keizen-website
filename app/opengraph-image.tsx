import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Site-wide default OG image — inherited by every route unless a segment defines its own. */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#06090a",
          color: "#f2f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#22e6b8",
              color: "#04120e",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ fontSize: 36, fontWeight: 700 }}>{siteMeta.name}</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 56, fontWeight: 700, maxWidth: 900, lineHeight: 1.15 }}>
          Industrial Laser Marking, Engraving &amp; Traceability Systems
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#8fa09c", maxWidth: 800 }}>
          {siteMeta.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
