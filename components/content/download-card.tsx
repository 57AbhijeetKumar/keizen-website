import { FileText, Download } from "lucide-react";
import type { Download as DownloadAsset } from "@/lib/cms/types";

export function DownloadCard({ download }: { download: DownloadAsset }) {
  return (
    <a
      href={download.fileUrl}
      download
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-premium hover:border-accent/50"
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="flex-1">
        <span className="block font-medium text-foreground">{download.title}</span>
        <span className="block text-xs uppercase text-muted-foreground">
          {download.fileType}
          {download.sizeLabel ? ` · ${download.sizeLabel}` : ""}
        </span>
      </span>
      <Download
        className="h-4 w-4 text-muted-foreground transition-premium group-hover:text-accent"
        aria-hidden="true"
      />
    </a>
  );
}
