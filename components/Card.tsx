"use client";

import Image from "next/image";
import { Star } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  year: number;
  rating: number;
}

const Card = ({ image, title, year, rating }: CardProps) => {
  return (
    <div className="bg-slate-800 space-y-1 flex flex-col items-center justify-evenly w-full p-2 text-white rounded-md text-center">
      <h1 className="text-xl">{title}</h1>
      <div className="w-full px-2 flex justify-center items-center text-sm gap-x-8">
        <p className="text-slate-400">{year}</p>
        <div className="flex justify-center items-center gap-x-2">
          <Star size={18} />
          <p className="text-yellow-500">{rating.toPrecision(2)}</p>
        </div>
      </div>
      <div className="relative aspect-square w-[95%]">
        <Image
          src={image}
          alt={title}
          className="aspect-square rounded-md"
          fill
        />
      </div>
    </div>
  );
};

export default Card;
