import Image from "next/image";

async function getMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=es`
  );
  const data = await res.json();
  return data;
}

async function getCast(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}&language=es`
  );
  const data = await res.json();
  return data;
}

const Movie = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const movie = await getMovie(id);
  const cast = await getCast(id);
  const genres = movie.genres.map((genre: any) => genre.name);

  if (!movie) {
    return <div>No se encontro la pelicula</div>;
  }

  return (
    <main className="min-h-screen py-16 px-8 z-10 relative text-white">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundImage:
            `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` || "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 -z-10 brightness-[30%] backdrop-blur-sm"
      ></div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl">{movie.title}</h1>
        <p>Título original: {movie.original_title}</p>
        <div className="flex items-center">
          <p>{movie.release_date.slice(0, 4)}</p>
          <p className="ml-4">{movie.runtime} min</p>
          <p className="ml-4">⭐️ {movie.vote_average.toPrecision(2)} / 10</p>
        </div>
        <div className="relative aspect-[2/3] w-[250px] mt-2">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="aspect-[1/1]"
            fill
            sizes="(100vw - 2rem) 100vh"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center w-[70%]">
        <div className="flex items-center gap-x-4 py-2">
          {genres.map((genre: string) => (
            <p key={genre} className="border px-2 py-1 rounded-md text-sm">
              {genre}
            </p>
          ))}
        </div>
        <p>{movie.overview}</p>
        <div className="flex flex-col justify-center">
          <p className="border-t py-2">
            <strong>Dirección: </strong>
            {cast.crew
              .filter((c: any) => c.job === "Director")
              .map((c: any) => c.name)}
          </p>
          <p className="border-t py-2">
            <strong>Guionistas: </strong>
            {cast.crew
              .filter((c: any) => c.department === "Writing")
              .map((c: any) => c.name)
              .join(",  ")}
          </p>
          <p className="border-t py-2">
            <strong>Reparto: </strong>
            {cast.cast
              .filter((c: any) => c.known_for_department === "Acting")
              .map((c: any) => c.name)
              .slice(0, 5)
              .join(",  ")}
            ...
          </p>
        </div>
      </div>
    </main>
  );
};

export default Movie;
