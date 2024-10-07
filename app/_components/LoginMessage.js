import Link from "next/link";

function LoginMessage() {
  return (
    <div className="flex flex-col items-center justify-center p-2 m-4">
      <h2 className="text-2xl  text-[#34495e]">Please Log in to Continue.</h2>
      <Link
        className="mt-4 bg-[#3498db]  flex justify-center items-center text-white text-lg h-12 w-56 hover:bg-[#348adb] transition-all duration-300"
        href="/login"
      >
        Go to Login page
      </Link>
    </div>
  );
}

export default LoginMessage;
