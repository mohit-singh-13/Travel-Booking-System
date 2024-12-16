"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-8">
      <h1 className="w-[90%] text-5xl sm:text-7xl text-center leading-[3.5rem]">
        Welcome to{" "}
        <span className="font-bold text-gray-700">TravelByHeart</span>
      </h1>
      <Button
        className="w-[70%] rounded-xl text-3xl px-4 py-10 bg-black text-white"
        onClick={() => {
          router.push("/packages");
        }}
      >
        Click Here to Explore
      </Button>
    </div>
  );
}
