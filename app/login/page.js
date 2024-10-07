import SignIn from "../_components/SignIn";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6 mt-10 items-center">
      <h2 className="text-xl md:text-3xl text-[#34495e] font-semibold">
        Log in to get started.
      </h2>
      <SignIn />
    </div>
  );
}
