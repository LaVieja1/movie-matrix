"use client";

import Card from "./Card";

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
            <Card
              id={movie.id}
              key={movie.id}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              title={movie.title}
              year={movie.release_date}
              rating={movie.vote_average}
            />
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
