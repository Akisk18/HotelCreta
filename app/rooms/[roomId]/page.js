import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import { getRoom, getRooms } from "@/app/_lib/data-service";
import {
  ChevronLeftIcon,
  UsersIcon,
  EyeSlashIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { Suspense } from "react";

const revalidate = 0;

export async function generateMetadata({ params }) {
  const { name } = await getRoom(params.roomId);
  return { title: `Room ${name}` };
}

export async function generateStaticParams() {
  const rooms = await getRooms();
  const ids = rooms.map((room) => ({ roomId: String(room.id) }));

  return ids;
}
export default async function Page({ params }) {
  const room = await getRoom(params.roomId);

  const { name, maxCapacity, image, description } = room;

  return (
    <div className="flex flex-col  items-center mt-6 ">
      <h2 className="flex flex-row text-3xl md:text-5xl font-bold  text-[#34495e] mb-4">
        <Link href="/rooms">
          <ChevronLeftIcon className="w-10 md:w-14 md:h-14 hover:translate-x-[-10px] transition-transform duration-300" />
        </Link>
        Room {name}
      </h2>
      <div className="flex flex-col xl:flex-row md:flex-col w-[90%] lg:w-[98%]  border-2 border-[#34495e]">
        <img
          className="xl:w-[900px] xl:h-[600px] lg:w-[500px] lg:h-[520px]"
          src={image}
          alt="room image"
        />
        <div className="flex flex-col m-3 ">
          <p className="text-lg">
            <TextExpander>{description}</TextExpander>
          </p>
          <p className="flex flex-row items-center gap-1 mt-12 text-lg">
            {" "}
            <UsersIcon className="w-7 h-7 text-[#34495e]" />
            For up to{" "}
            <span className="font-bold text-[#34495e] ">
              {maxCapacity}
            </span>{" "}
            Guests{" "}
          </p>
          <p className="flex flex-row items-center mt-3 text-lg">
            <MapPinIcon className="w-7 h-7 text-[#34495e]" />
            Located in the heart of the island!
          </p>
          <p className="flex flex-row items-center mt-3 gap-1 text-lg">
            <EyeSlashIcon className="w-7 h-7 text-[#34495e]" />
            Privacy <span className="font-bold text-[#34495e]">100%</span>{" "}
            guaranteed!
          </p>
        </div>
      </div>
      <h2 className="mt-12 text-2xl md:text-4xl font-bold text-[#348adb]">
        Reserve today. Pay on arrival.
      </h2>

      <Suspense fallback={<Spinner />}>
        <Reservation room={room} />
      </Suspense>
    </div>
  );
}
