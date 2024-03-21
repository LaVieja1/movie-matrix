"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

interface FeaturedCardProps {
  image: string;
  title: string;
  year: number;
  rating: number;
}

const FeaturedCard = ({ image, title, year, rating }: FeaturedCardProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="aspect-video w-full h-[500px] flex flex-row items-center justify-start">
        <div className="w-full h-full relative">
          <Image
            src={image}
            alt={title}
            className="opacity-30 brightness-50 rounded-2xl"
            fill
          />
          <div className="flex flex-col items-center justify-center gap-y-2 text-center absolute top-0 left-0 right-0 bottom-0">
            <h1 className="text-xl md:text-6xl">{title}</h1>
            <div className="flex items-center justify-center gap-x-8 text-xl md:text-4xl">
              <p className="text-slate-400">
                {year.toLocaleString("es").slice(0, 4)}
              </p>
              <p>⭐️ {rating.toPrecision(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
