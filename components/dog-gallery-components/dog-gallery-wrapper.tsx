import React from "react";
import axios from "axios";
import Image from "next/image";
import { DoggyPicInfo } from "@/types";
import LoadingAni from "./loading-ani";

export default async function DogGalleryWrapper() {
  let doggyPics = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  const renderDogPics = doggyPics.data.map(
    (item: DoggyPicInfo, index: number) => {
      return (
        <div
          key={`${index}${Math.random()}`}
          className="min-h-72 relative bg-muted"
        >
          <Image
            alt="Doggo Pic"
            src={item.url}
            quality={100}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      );
    }
  );

  return (
    <div className="grow w-full p-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
      {renderDogPics}
    </div>
  );
}
