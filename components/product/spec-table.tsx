import type { Specification } from "@/lib/cms/types";

/** The single biggest content gap identified in the SRS — real, structured specs, not prose. */
export function SpecTable({ specifications }: { specifications: Specification[] }) {
  if (specifications.length === 0) return null;

  return (
    <table className="w-full overflow-hidden rounded-2xl border border-border text-sm">
      <tbody className="font-mono">
        {specifications.map((spec, index) => (
          <tr
            key={spec.label}
            className={index % 2 === 0 ? "bg-surface" : "bg-surface-2"}
          >
            <th
              scope="row"
              className="w-1/2 px-5 py-3 text-left font-sans font-medium text-muted-foreground"
            >
              {spec.label}
            </th>
            <td className="px-5 py-3 text-foreground">
              {spec.value}
              {spec.unit ? ` ${spec.unit}` : ""}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
