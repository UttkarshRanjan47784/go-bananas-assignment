import TopBar from "@/components/topbar";
import React from "react";

export default function JsonPlaceholderPage() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div className="grow flex justify-center items-center">
        JSON Placeholder
      </div>
    </main>
  );
}
