import DogGalleryWrapper from "@/components/dog-gallery-components/dog-gallery-wrapper";
import TopBar from "@/components/topbar";
import React from "react";

export default function DogGalleryPage() {
  return (
    <main className="flex flex-col h-dvh w-full">
      <TopBar />
      <div>
        <h1 className="flex justify-center items-center p-5 text-2xl sm:text-3xl">
          The Dog Gallery
        </h1>
        <p className="text-muted-foreground font-mono flex justify-center items-center">
          Hall of fame for all doggos.
        </p>
      </div>
      <DogGalleryWrapper />
    </main>
  );
}
