"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    roomPrice: bookingData.roomPrice,
    totalPrice: bookingData.totalPrice,
    isPaid: false,
    hasAllInclusive: bookingData.hasAllInclusive,
    status: "unconfirmed",
  };

  const { error1 } = await supabase.from("bookings").insert([newBooking]);

  if (error1) throw new Error("Booking could not be created");

  revalidatePath(`/rooms/${bookingData.roomId}`);

  redirect("/rooms/thankyou");
}
