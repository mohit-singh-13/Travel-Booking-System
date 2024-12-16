import Sidebar from "@/components/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
        <div className="text-center px-4">
          <Sidebar href={"/admin/packages"} title="Manage Packages" />
          <Sidebar href={"/admin/bookings"} title="View Bookings" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
