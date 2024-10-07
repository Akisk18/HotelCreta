"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import { useState } from "react";
import SubmitButton from "./SubmitButton";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

function ReservationForm({ room, user, settings }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = room;
  const { allInclusive } = settings;
  const [numGuests, setNumGuests] = useState(1);
  const [hasAllInclusive, setHasAllInclusive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);
  const roomPrice = numNights * (regularPrice - discount);
  const inclusivePrice = allInclusive * numGuests * numNights;
  const totalPrice = hasAllInclusive ? roomPrice + inclusivePrice : roomPrice;

  const bookingData = {
    startDate,
    endDate,
    numNights,
    hasAllInclusive,
    roomPrice,
    totalPrice,
    roomId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData);

  function handleNumGuestsChange(e) {
    setNumGuests(Number(e.target.value));
  }

  return (
    <div className="scale-[1.01] mt-12">
      <div className="px-16 py-2 flex justify-between items-center">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className=" py-10 px-16 text-lg flex gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            value={numGuests}
            onChange={handleNumGuestsChange}
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="px-5 py-3 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="space-y-2 ">
          <input
            className="mr-2"
            type="checkbox"
            checked={hasAllInclusive}
            onChange={() => setHasAllInclusive(!hasAllInclusive)}
          />
          <label htmlFor="hasAllInclusive">All Inclusive?</label>
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-[#34495e] text-base">Start by selecting dates</p>
          ) : (
            <div className="flex flex-col justify-center items-end">
              <p className="text-[#34495e] font-bold md:text-xl flex flex-row">
                TOTAL PRICE:{" "}
                {hasAllInclusive ? (
                  <div className="flex flex-row  items-center justify-center">
                    {`${totalPrice}$`}{" "}
                    <InformationCircleIcon
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-6 h-6 hover:cursor-pointer"
                    />
                    {isOpen && (
                      <div className="flex flex-col text-sm lg:text-lg">
                        {" "}
                        {`(${roomPrice}$ Room Price +${inclusivePrice}$ All
                        Inclusive)`}{" "}
                      </div>
                    )}
                  </div>
                ) : (
                  `${roomPrice}$`
                )}{" "}
              </p>
              <SubmitButton pendingLabel="Working...">Reserve</SubmitButton>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
