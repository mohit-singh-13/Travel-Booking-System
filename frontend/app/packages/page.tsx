"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import axios from "axios";
import TourCard from "@/components/TourCard";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

// import TourCard from "@/components/TourCard";

interface PackagesProps {
  _id: string;
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const AllTours = () => {
  const [packages, setPackages] = useState<PackagesProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPackages = async () => {
    setLoading(true);
    const URL = process.env.NEXT_PUBLIC_BE_URL + "/api/v1/packages" || "";
    const { data }: { data: { packages: []; success: boolean } } =
      await axios.get(URL);

    setPackages(data.packages);
    setLoading(false);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const router = useRouter();

  if (loading) return <Loading />;

  return (
    <div className="bg-slate-100 px-12 py-8">
      <div className="flex items-center justify-between">
      <h2 className="font-bold text-5xl">Tour Packages</h2>
      <Button className="text-white bg-black px-4 py-4 rounded-lg" onClick={() => router.push("/admin/packages")}>Admin Panel</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-12">
        {packages.map((pkg, ind) => (
          <TourCard
            key={ind}
            id={pkg._id}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            image={pkg.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTours;
