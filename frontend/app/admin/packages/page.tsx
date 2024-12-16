"use client";

import Button from "@/components/Button";
import ListPackages from "@/components/ListPackages";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface PackagesProps {
  _id: string;
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const Page = () => {
  const [packages, setPackages] = useState<PackagesProps[]>([]);

  const fetchBookings = async () => {
    const URL = process.env.NEXT_PUBLIC_BE_URL;
    const response: { data: { success: boolean; packages: [] } } =
      await axios.get(`${URL}/api/v1/admin`);

    setPackages(response.data.packages);
    console.log(response.data.packages);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex justify-between py-10 px-4">
        <h2 className="text-4xl font-bold">All Packages</h2>
        <Button
          className="text-white bg-black px-4 py-4 rounded-lg"
          onClick={() => router.push("/admin/packages/new")}
        >
          Add New Package
        </Button>
      </div>
      <div className="w-[80%] mx-auto">
        <ListPackages packages={packages} />
      </div>
    </div>
  );
};

export default Page;
