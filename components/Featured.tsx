"use client";

import { Suspense, useRef } from "react";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import FeaturedCard from "./FeaturedCard";

interface FeaturedProps {
  results: [];
  mediaType: string;
}

const Featured = ({ results, mediaType }: FeaturedProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  const router = useRouter();

  return (
    <Suspense>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
            type: "tween",
          },
        }}
        className="w-full py-4"
      >
        <Carousel
          plugins={[plugin.current]}
          className="w-full cursor-pointer relative "
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {results.map((result: any) => (
              <CarouselItem
                onClick={() => router.push(`${mediaType}/${result.id}`)}
                key={result.id}
                className="w-full"
              >
                <FeaturedCard
                  image={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}
                  title={result.title || result.name}
                  year={
                    result.release_date?.split("-")[0] ||
                    result.first_air_date?.split("-")[0]
                  }
                  rating={result.vote_average}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex absolute top-[50%] left-6 bg-transparent" />
          <CarouselNext className="hidden md:flex absolute top-[50%] right-6 bg-transparent" />
        </Carousel>
      </motion.div>
    </Suspense>
  );
};

export default Featured;
