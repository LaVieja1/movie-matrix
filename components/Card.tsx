"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

interface CardProps {
  id: number;
  image: string;
  title: string;
  year: number;
  rating: number;
}

const Card = ({ id, image, title, year, rating }: CardProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const handleType = (id: number) => {
    if (type === "movie") {
      router.push(`/${id}`);
    } else if (type === "tv") {
      return "tv";
    }
  };

  return (
    <div
      onClick={() => router.push(`/${id}`)}
      className="bg-slate-800 space-y-1 flex flex-col items-center justify-center w-full p-2 text-white rounded-md text-center hover:opacity-90 transition cursor-pointer max-h-[400px]"
    >
      <h1 className={`text-xl ${title.length > 20 ? "line-clamp-1" : ""}`}>
        {title}
      </h1>
      <div className="w-full px-2 flex justify-center items-center text-sm gap-x-8">
        <p className="text-slate-400">
          {year.toLocaleString("es").slice(0, 4)}
        </p>
        <div className="flex justify-center items-center gap-x-2">
          ⭐️
          <p className="text-yellow-500">{rating.toPrecision(2)}</p>
        </div>
      </div>
      <div className="relative aspect-[2/3] w-[95%]">
        <Image
          src={image}
          alt={title}
          className="aspect-[2/3] rounded-md"
          fill
          sizes="(100vw - 2rem) 100vh"
        />
      </div>
    </div>
  );
};

export default Card;
