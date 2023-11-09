"use client";
import { SIDENAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="md:w-60 h-screen flex-1 fixed border-r border-zinc-700 hidden md:flex">
      <div className="flex flex-col space-y-6 w-full">
        <Link
          href="/"
          className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-700 h-12 w-full"
        >
          <span className="h-7 w-7 bg-zinc-500 rounded-lg" />
          <span className="font-bold text-xl hidden md:flex">
            Chris Cardoza
          </span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-6 ">
          {SIDENAV_ITEMS.map((item, idx) => {
            return (
              <div key={idx}>
                <Link
                  href={item.path}
                  className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-700 ${
                    item.path === pathname ? "bg-zinc-800" : ""
                  }`}
                >
                  <span className="font-semibold text-xl flex">
                    {item.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
