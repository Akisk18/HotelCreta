import Image from "next/image";
import { getRooms } from "../_lib/data-service";
import { UsersIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
async function RoomList({ filter }) {
  const rooms = await getRooms();
  const validRooms = rooms || [];

  let displayedRooms;
  if (filter === "all") displayedRooms = rooms;
  if (filter === "small")
    displayedRooms = rooms.filter((room) => room.maxCapacity <= 2);
  if (filter === "medium")
    displayedRooms = rooms.filter((room) => room.maxCapacity > 2);
  return (
    <div className="grid xl:grid-cols-2 gap-8 mt-7 md:grid-cols-1">
      {validRooms.length > 0 ? (
        displayedRooms.map((room) => (
          <div
            className="flex flex-row gap-12 border-2 h-auto border-[#34495e]  min-h-64 "
            key={room.id}
          >
            <div className=" relative w-24 xl:h-72 xl:w-full md:w-1/2">
              <Image
                src={room.image}
                width={400}
                height={300}
                className="object-cover h-full w-full"
                alt="room image"
                priority
              />
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <h3 className="text-[#34495e] text-2xl font-semibold">
                Room {room.name}
              </h3>

              <p className="flex flex-row items-center">
                <UsersIcon className="w-5 h-5 text-[#34495e]" />
                For up to {room.maxCapacity} Guests
              </p>
              {room.discount > 0 ? (
                <div className="flex flex-row items-center">
                  <p className="line-through ">{room.regularPrice}$ </p>
                  <p className="ml-3 font-bold text-xl">
                    {room.regularPrice - room.discount}${" "}
                  </p>
                  / night
                </div>
              ) : (
                <p>{room.regularPrice}$ / night</p>
              )}

              <Link
                className="bg-[#3498db] flex justify-center items-center text-white text-lg h-12 w-56 md:ml-2 lg:mr-3 hover:bg-[#348adb] transition-all duration-300"
                href={`/rooms/${room.id}`}
              >
                Details and Reservations
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No rooms found. </div>
      )}
    </div>
  );
}

export default RoomList;
