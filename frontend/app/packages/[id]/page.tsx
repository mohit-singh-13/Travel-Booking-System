"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Loading from "../loading";
import Image from "next/image";
import Button from "@/components/Button";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import TourForm from "@/components/TourForm";

interface PackageProps {
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const TourPage = () => {
  const { id } = useParams();

  const [pkg, setPkg] = useState<PackageProps>({
    title: "",
    description: "",
    price: "",
    dates: [],
    image: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPackage = useCallback(async () => {
    setLoading(true);
    const URL = process.env.NEXT_PUBLIC_BE_URL + `/api/v1/packages/${id}` || "";
    const {
      data,
    }: {
      data: {
        success: boolean;
        data: PackageProps;
      };
    } = await axios.get(URL);

    setPkg(data.data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPackage();
  }, [fetchPackage]);

  const router = useRouter();

  const [bookForm, setBookForm] = useState(false);

  if (loading) return <Loading />;

  return (
    <div className="bg-slate-100 py-8 px-8">
      <Button
        className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-300"
        onClick={() => router.back()}
      >
        <IoMdArrowBack />
        Back to Tour Packages
      </Button>
      <div className="max-w-[800px] mx-auto rounded-2xl bg-white space-y-2 mt-4">
        <Image
          src={pkg.image}
          alt="tour-thumbnail"
          width={100}
          height={100}
          unoptimized
          className="w-full rounded-t-2xl"
        />

        <div className="flex flex-col justify-between gap-8 px-4 py-4">
          <h2 className="font-extrabold text-4xl font-mono">{pkg.title}</h2>
          <p className="text-lg text-gray-600">{pkg.description}</p>
          <div className="flex items-center gap-2">
            <IoPricetagsOutline size={25} />
            <p className="font-bold flex items-center text-xl">
              {" "}
              <span>
                <FaIndianRupeeSign color="green" size={18} />
              </span>{" "}
              {pkg.price}
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Available Dates</p>
            {pkg.dates.map((date, index) => (
              <li key={index} className="tracking-wider font-serif">
                {new Date(date).toDateString()}
              </li>
            ))}
          </div>
          <Button
            className="w-full text-white bg-black font-bold text-lg rounded-lg py-4"
            onClick={() => setBookForm(true)}
          >
            Book Now
          </Button>
        </div>
      </div>
      {bookForm && <TourForm setBookForm={setBookForm} />}
    </div>
  );
};

export default TourPage;
