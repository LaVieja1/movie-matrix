"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  year: number;
  rating: number;
}

const Card = ({ image, title, year, rating }: CardProps) => {
  return (
    <div className="bg-slate-800 flex flex-col items-center justify-evenly w-full p-2 text-white rounded-md text-center">
      <h1 className="text-xl">{title}</h1>
      <p className="text-slate-400">{year}</p>
      <p className="text-yellow-500">{rating.toPrecision(2)}</p>
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
