// "use client";

import Image from "next/image";
import Button from "./Button";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";

interface TourCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const TourCard = ({ title, description, price, image }: TourCardProps) => {
  console.log(image);
  return (
    <div className="w-full max-w-[480px] border-4 rounded-2xl grid">
      <Image
        src={image}
        alt="tour-thumbnail"
        width={250}
        height={250}
        className="w-full rounded-t-2xl"
      />

      <div className="px-2 py-4 flex flex-col gap-4">
        <h2 className="text-4xl font-semibold leading-[2.8rem]">{title}</h2>
        <p className="text-base text-gray-600">{description}</p>
        <div className="flex items-center gap-4">
          <IoPricetagsOutline size={25} />

          <div className="flex items-center">
            <FaIndianRupeeSign color="green" size={18} />
            <p className="text-xl font-bold">{price}</p>
          </div>
        </div>

        <Button className="w-full bg-black text-white rounded-lg py-4 font-semibold tracking-wide">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default TourCard;
