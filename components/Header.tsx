"use client";

import useScroll from "@/lib/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Header() {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row items-center justify-center md:hidden"
            href="/"
          >
            <span className="font-bold text-xl">Chris Cardoza</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-green-300 flex items-center justify-center text-center">
            HQ
          </div>
        </div>
      </div>
    </div>
  );
}
