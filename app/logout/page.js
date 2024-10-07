import SignOut from "../_components/SignOut";

export const metadata = {
  title: "Logout",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6 mt-10 items-center">
      <h2 className="text-xl md:text-3xl text-[#34495e] font-semibold">
        You are about to log out , continue?
      </h2>
      <SignOut />
    </div>
  );
}
