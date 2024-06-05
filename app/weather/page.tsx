import TopBar from "@/components/topbar";
import React from "react";

export default function WeatherPage() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div className="grow flex justify-center items-center">Weather</div>
    </main>
  );
}
