import { signOutAction } from "../_lib/actions";

function SignOut() {
  return (
    <form action={signOutAction}>
      <button className="bg-[#3498db] flex justify-center items-center text-white text-lg h-12 w-56 hover:bg-[#348adb] transition-all duration-300">
        Log out
      </button>
    </form>
  );
}

export default SignOut;
