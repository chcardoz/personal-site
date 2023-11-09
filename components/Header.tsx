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
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-zinc-700`,
        {
          "border-b border-zinc-700 bg-blue/75 backdrop-blur-lg": scrolled,
          "border-b border-zinc-700 bg-blue": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
            href="/"
          >
            <span className="h-7 w-7 bg-zinc-500 rounded-lg" />
            <span className="font-bold text-xl">Chris Cardoza</span>
          </Link>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  );
}
