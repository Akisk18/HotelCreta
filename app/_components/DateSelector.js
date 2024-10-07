"use client";
import { DayPicker } from "react-day-picker";
import { useReservation } from "./ReservationContext";
import "react-day-picker/dist/style.css";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";

function isAlreadyBooked(range, datesArr) {
  if (!range || !range.from || !range.to) {
    return false;
  }
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, room, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const { minBookingLength, maxBookingLength } = settings;
  const { regularPrice, discount } = room;

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const numNights = differenceInDays(displayRange.to, displayRange.from);

  const roomPrice = numNights * (regularPrice - discount);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />
      <div className="flex items-center justify-between px-8 bg-[#348adb] text-white md:h-[72px] ">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-white">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="md:text-2xl text-lg">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-[#348adb] px-3 py-2 text-lg md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-sm md:text-lg lg:text-sm font-bold uppercase">
                  Room Price
                </span>{" "}
                <span className="text-sm md:text-2xl lg:text-lg font-semibold">
                  ${roomPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-white py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
