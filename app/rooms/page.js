import { Suspense } from "react";
import RoomList from "../_components/RoomList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Rooms",
};

export const revalidate = 360;
export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div className="flex flex-col  justify-center w-[98%] p-3 m-6 ">
      <h2 className="mb-3 font-bold  text-3xl text-[#34495e]">
        Our luxury Rooms
      </h2>
      <p className="text-lg">
        Experience the epitome of relaxation in our luxury rooms, nestled on a
        serene island paradise. Each room offers breathtaking ocean views,
        elegant décor, and modern amenities, ensuring a perfect blend of comfort
        and sophistication. Wake up to the gentle sound of waves and unwind on
        your private balcony, surrounded by lush tropical beauty. Whether you
        seek tranquility or adventure, our island oasis provides an unparalleled
        escape for the discerning traveler.
      </p>
      <div className="flex justify-end mb-5 lg:mt-10">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        {" "}
        <RoomList filter={filter} />
      </Suspense>
    </div>
  );
}
