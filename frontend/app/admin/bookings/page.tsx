"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import ListBookings from "@/components/ListBookings";

interface BookingsProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfTravelers: number;
}

const Page = () => {
  const [bookings, setBookings] = useState<BookingsProps[]>([]);

  const fetchBookings = async () => {
    const URL = process.env.NEXT_PUBLIC_BE_URL;
    const response: { data: { success: boolean; result: [] } } =
      await axios.get(`${URL}/api/v1/admin/bookings`);

    setBookings(response.data.result);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between py-10 px-4">
        <h2 className="text-4xl font-bold">All Bookings</h2>
      </div>
      <div className="w-[80%] mx-auto">
        <ListBookings bookings={bookings} />
      </div>
    </div>
  );
};

export default Page;
