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
    <div className="bg-slate-800 flex flex-col items-center justify-center w-[250px] p-4 text-white rounded-md">
      <h1 className="text-xl">{title}</h1>
      <p>{year}</p>
      <p className="text-yellow-500">{rating}</p>
      <div className="relative aspect-square w-[95%]">
        <Image src={image} alt={title} className="aspect-square" fill />
      </div>
    </div>
  );
};

export default Card;
