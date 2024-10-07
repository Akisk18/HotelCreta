import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-50">
      <Image
        src="/logo_transparent.png"
        height="120"
        width="120"
        alt="Hotel Creta logp"
      />
      <span className="text-xl font-semibold text-primary-100"></span>
    </Link>
  );
}

export default Logo;
