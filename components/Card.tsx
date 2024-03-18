"use client";

import Image from "next/image";
import { useEffect } from "react";

interface CardProps {
  image: string;
  title: string;
  year: number;
  rating: number;
}

const Card = ({ image, title, year, rating }: CardProps) => {
  return (
    <div className="bg-slate-800 h-40 w-40">
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        className="object-contain w-full h-full"
        fill
      />
      <p>{year}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Card;
