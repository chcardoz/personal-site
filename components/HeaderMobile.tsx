"use client";

import {
  ListVariants,
  MenuItemVariants,
  SIDENAV_ITEMS,
  SidebarVariants,
} from "@/lib/constants";
import useDimensions from "@/lib/use-dimensions";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";

export default function HeaderMobile() {
  const pathName = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-slate-900"
        variants={SidebarVariants}
      />
      <motion.ul
        className="absolute grid w-full gap-3 px-10 py-16"
        variants={ListVariants}
      >
        {SIDENAV_ITEMS.map((item, idx) => {
          const isLastItem = idx === SIDENAV_ITEMS.length - 1;
          return (
            <div key={idx}>
              <MenuItem>
                <Link
                  href={item.path}
                  onClick={() => toggleOpen()}
                  className={`flex w-full text-2xl ${
                    item.path === pathName ? "font-bold" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </MenuItem>

              {!isLastItem && (
                <MenuItem className="my-3 h-px w-full bg-gray-300" />
              )}
            </div>
          );
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
}

function MenuToggle({ toggle }: { toggle: any }) {
  return (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-4 top-[14px] z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

function Path(props: any) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke="hsl(0,0%,18%)"
      strokeLinecap="round"
      {...props}
    />
  );
}

function MenuItem({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <motion.li className={className} variants={MenuItemVariants}>
      {children}
    </motion.li>
  );
}
