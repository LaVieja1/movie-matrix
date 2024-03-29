"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface CardProps {
  id: number;
  image: string;
  title: string;
  year: number;
  rating: number;
  mediaType?: string;
}

const Card = ({ id, image, title, year, rating, mediaType }: CardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams?.get("type") || "movie";
  const typePath = pathname?.split("/")[1];

  const handleType = (id: number) => {
    if (typePath === "" && type === "movie") {
      router.push(`/movie/${id}`);
    } else if (typePath === "" && type === "tv") {
      router.push(`/tv/${id}`);
    }

    if (typePath === "movie") {
      router.push(`/movie/${id}`);
    } else if (typePath === "tv") {
      router.push(`/tv/${id}`);
    }

    if (mediaType === "movie") {
      router.push(`/movie/${id}`);
    } else if (mediaType === "tv") {
      router.push(`/tv/${id}`);
    }
  };

  return (
    <Suspense>
      <div
        onClick={() => handleType(id)}
        className="bg-slate-800 space-y-1 flex flex-col items-center justify-center w-full p-1 sm:p-2 text-white rounded-md text-center hover:opacity-90 transition cursor-pointer max-h-[600px] md:max-h-[600px]"
      >
        <h1
          className={`text-sm sm:text-xl ${
            title.length > 20 ? "line-clamp-1" : ""
          }`}
        >
          {title}
        </h1>
        <div className="w-full px-2 flex justify-center items-center text-xs sm:text-sm gap-x-2 sm:gap-x-8">
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
    </Suspense>
  );
};

export default Card;
