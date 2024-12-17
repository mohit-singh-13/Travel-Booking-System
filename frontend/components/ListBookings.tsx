import { useEffect, useState } from "react";

interface BookingsProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfTravelers: number;
}

const ListBookings = ({ bookings }: { bookings: BookingsProps[] }) => {
  const [booking, setBooking] = useState<BookingsProps[]>([]);

  useEffect(() => {
    setBooking(bookings);
  }, [bookings]);

  return (
    <div>
      <div className="grid grid-cols-4 font-bold text-gray-700">
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Travelers</p>
      </div>
      <div className="flex flex-col gap-4">
        {booking.length >0 ?  booking.map((element, index) => (
          <div key={index} className="grid grid-cols-4 border-t-2 pt-2 mt-2">
            <p>{element.name}</p>
            <p>{element.email}</p>
            <p>{element.phoneNumber}</p>
            <p>{element.numberOfTravelers}</p>
          </div>
        )): <div className="text-center pt-24 font-bold text-xl">No Bookings Yet</div>}
      </div>
    </div>
  );
};

export default ListBookings;
