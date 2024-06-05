import React from "react";
import dogFace from "@/components/assets/dog-face.svg";
import Image from "next/image";

export default function DogGalleryLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" h-20 w-20 animate-ping">
        <Image src={dogFace} alt="dog paw loader" className="dark:text-white" />
      </div>
    </div>
  );
}
