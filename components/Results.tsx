"use client";

import Card from "./Card";
import { motion } from "framer-motion";

interface ResultsProps {
  results: [];
  type: string;
}

const Results = ({ results, type }: ResultsProps) => {
  return (
    <>
      {type === "movie" ? (
        <>
          {results.map((movie: any) => (
            <motion.div
              key={movie.id}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut", type: "tween" },
              }}
              layoutScroll={true}
              initial={{ opacity: 0 }}
            >
              <Card
                id={movie.id}
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                year={movie.release_date}
                rating={movie.vote_average}
              />
            </motion.div>
          ))}
        </>
      ) : (
        <>
          {results.map((tv: any) => (
            <Card
              id={tv.id}
              key={tv.id}
              image={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
              title={tv.name}
              year={tv.first_air_date}
              rating={tv.vote_average}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Results;
