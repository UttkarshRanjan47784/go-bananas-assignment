import JsonMenu from "@/components/json-placeholder-components/json-menu";
import TopBar from "@/components/topbar";
import React from "react";

export default async function JsonPlaceholderPage() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div className="grow flex justify-center items-center relative">
        <JsonMenu />
      </div>
    </main>
  );
}
