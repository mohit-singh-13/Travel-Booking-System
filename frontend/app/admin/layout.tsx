"use client";

import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
        <div className="text-center px-4">
          <Button
            className="text-white bg-black px-4 py-2 rounded-lg"
            onClick={() => router.push("/packages")}
          >
            Home
          </Button>
          <Sidebar href={"/admin/packages"} title="Manage Packages" />
          <Sidebar href={"/admin/bookings"} title="View Bookings" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
