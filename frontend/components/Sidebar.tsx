"use client";

import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ href, title }: { href: string; title: string }) => {
  const path = usePathname();
  const selected = path === href || path.startsWith(href);
  const router = useRouter();

  return (
    <div
      className={`${
        selected ? "bg-[#000000] text-white" : "text-slate-500"
      } cursor-pointer my-2 rounded-sm py-1`}
      onClick={() => router.push(href)}
    >
      {title}
    </div>
  );
};

export default Sidebar;
