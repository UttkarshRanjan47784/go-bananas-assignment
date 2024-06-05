import React from "react";
import banana from "@/components/assets/bananas.svg";
import Image from "next/image";

export default function DogGalleryLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" h-20 w-20 animate-ping">
        <Image src={banana} alt="dog paw loader" className="dark:text-white" />
      </div>
    </div>
  );
}
