import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden">
      <Image className="object-cover" fill src="/home.jpg" alt="" />

      <h1 className="absolute bottom-[50%] z-1 text-white text-3xl md:text-5xl font-semibold">
        Welcome to tropical Paradise!
      </h1>
      <Link
        href="/rooms"
        className="flex items-center justify-center absolute bottom-[40%] z-1 bg-[#3498db] text-white text-xl h-14 w-56 hover:bg-[#348adb] transition-all duration-300"
      >
        Explore Luxury Rooms
      </Link>
    </div>
  );
}
