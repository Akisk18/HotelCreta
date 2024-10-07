import Link from "next/link";
function NotFound() {
  return (
    <main className=" text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold text-[#34495e]">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block text-center  items-center justify-center px-6 py-3 text-lg bg-[#3498db] text-white h-12 w-56 hover:bg-[#348adb] transition-all duration-300"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
