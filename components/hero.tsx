import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grow w-full flex justify-center items-center px-5">
      <div>
        <p className="font-mono sm:text-xl">Hello Anon! Welcome to</p>
        <h1 className="text-4xl sm:text-5xl mb-5">Go Bananas API Tester</h1>
        <div className="space-x-3">
          <Link href="/dog-gallery">
            <Button className="transition-all duration-300 hover:scale-105">
              Dog Gallery
            </Button>
          </Link>
          <Link href="/weather">
            <Button className="transition-all duration-300 hover:scale-105">
              Weather
            </Button>
          </Link>
          <Link href="/json-placeholder">
            <Button className="transition-all duration-300 hover:scale-105">
              JSON
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
