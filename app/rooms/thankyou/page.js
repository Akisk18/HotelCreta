import Link from "next/link";

export default function Page() {
  return (
    <div className="text-center space-y-6 mt-4">
      <h1 className="text-4xl font-semibold text-[#34495e]">Thank you!</h1>
      <p>Your reservation has been succesfully created!</p>
      <p>
        Back to{" "}
        <Link className="underline" href="/">
          Home
        </Link>{" "}
      </p>
    </div>
  );
}
