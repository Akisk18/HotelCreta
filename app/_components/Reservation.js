import { auth } from "../_lib/auth";
import { getBookedDatesByRoomId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);

  const session = await auth();

  return (
    <div className="mt-3   ">
      {session?.user ? (
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#34495e] min-h-[400px] p-4 m-2">
          <DateSelector
            settings={settings}
            bookedDates={bookedDates}
            room={room}
          />

          <ReservationForm
            room={room}
            user={session.user}
            settings={settings}
          />
        </div>
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
