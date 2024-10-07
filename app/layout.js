import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_components/ReservationContext";
import { auth } from "./_lib/auth";

export const metadata = {
  title: { template: "%s | Hotel Creta", default: "Welcome | Hotel Creta" },
  description:
    "Luxurius hotel located in the heart of the island Crete on Greece",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="min-h-screen w-full">
        <header className="flex flex-row ">
          <Logo />
          <Navigation session={session} />
        </header>

        <main>
          {" "}
          <ReservationProvider>{children}</ReservationProvider>
        </main>
      </body>
    </html>
  );
}
