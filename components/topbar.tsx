import React from "react";
import { ModeToggle } from "./theme/mode-toggle";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center h-16 dark:border-b dark:border-muted-foreground shadow-lg pr-3 pb-1">
      <div className="hidden sm:flex">
        <Link href="/">
          <p className="py-5 px-3 hover:bg-muted transition-all duration-300 hover:scale-105 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/"></Link>
        <Link href="/dog-gallery">
          <p className="py-5 px-3 hover:bg-muted transition-all duration-300 hover:scale-105 cursor-pointer">
            Dog Gallery
          </p>
        </Link>
        <Link href="/weather">
          <p className="py-5 px-3 hover:bg-muted transition-all duration-300 hover:scale-105 cursor-pointer">
            Weather
          </p>
        </Link>
        <Link href="/json-placeholder">
          <p className="py-5 px-3 hover:bg-muted transition-all duration-300 hover:scale-105 cursor-pointer">
            JSON
          </p>
        </Link>
      </div>
      <div className="sm:hidden ml-3">
        <Menu />
      </div>
      <ModeToggle />
    </div>
  );
}
