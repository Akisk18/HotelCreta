import { signInAction } from "../_lib/actions";

function SignIn() {
  return (
    <form action={signInAction}>
      <button className="bg-[#3498db] flex justify-center items-center text-white text-lg h-12 w-56 hover:bg-[#348adb] transition-all duration-300">
        Continue with Google
      </button>
    </form>
  );
}

export default SignIn;
