import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMeta.name,
    short_name: siteMeta.name,
    description: siteMeta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#06090a",
    theme_color: "#06090a",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
