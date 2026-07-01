import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex w-fit items-center rounded-md bg-white px-2.5 py-1.5"
      aria-label="Kaizen Laser and Automation home"
    >
      <Image
        src="/logo.png"
        alt="Kaizen Laser and Automation"
        width={592}
        height={200}
        className="h-7 w-auto"
        priority
      />
    </Link>
  );
}
