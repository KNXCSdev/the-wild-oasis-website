import Link from "next/link";
import ReservationCard from "@/app/_components/ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">Your reservations</h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
