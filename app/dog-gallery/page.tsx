import TopBar from "@/components/topbar";
import React from "react";

export default function DogGalleryPage() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div className="grow flex justify-center items-center">Dog Gallery</div>
    </main>
  );
}
