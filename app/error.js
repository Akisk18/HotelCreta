"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 ">
      <h1 className="text-3xl font-semibold text-[#34495e]">
        Something went wrong!
      </h1>
      <p className="text-lg text-[#34495e]">{error.message}</p>
      <button
        onClick={reset}
        className="flex items-center justify-center px-6 py-3 text-lg bg-[#3498db] text-white h-12 w-56 hover:bg-[#348adb] transition-all duration-300"
      >
        Try again
      </button>
    </main>
  );
}
