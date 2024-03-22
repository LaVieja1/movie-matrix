import Image from "next/image";

import Card from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

async function getImages(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await res.json();
  return data;
}

async function getVideos(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=es-MX`
  );
  const data = await res.json();
  return data;
}

async function getRecommendations(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_API_KEY}&language=es`
  );
  const data = await res.json();
  return data;
}

const Movie = async ({ params }: { params: { id: string; type: string } }) => {
  const id = params.id;
  const movie = await getMovie(id);
  const images = await getImages(id);
  const videos = await getVideos(id);
  const cast = await getCast(id);
  const genres = movie.genres.map((genre: any) => genre.name);
  const recommendations = await getRecommendations(id);

  if (!movie) {
    return <div>No se encontro la pelicula</div>;
  }

  return (
    <main className="min-h-screen py-4 px-8 z-10 relative text-white">
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundImage:
            `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` || "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
        className="absolute inset-0 -z-10 brightness-[15%] backdrop-blur-sm"
      ></div>
      <div className="flex flex-col justify-center items-center xl:items-start">
        <h1 className="text-3xl">{movie.title}</h1>
        <p className="text-sm text-slate-400">{movie.original_title}</p>
        <div className="flex items-center">
          <p>{movie.release_date.slice(0, 4)}</p>
          <p className="ml-4">{movie.runtime} min</p>
          <p className="ml-4">⭐️ {movie.vote_average.toPrecision(2)} / 10</p>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-x-32">
          <div className="relative aspect-[2/3] w-[300px] my-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="aspect-[2/3]"
              fill
              sizes="(100vw - 2rem) 100vh"
            />
          </div>
          {videos.results
            .filter((v: any) => v.type === "Trailer")
            .slice(0, 1)
            .map((v: any) => (
              <iframe
                key={v.key}
                className="w-[300px] sm:w-[400px] md:w-[700px] xl:w-[1000px] h-[300px] xl:h-[450px] aspect-video"
                src={`https://www.youtube.com/embed/${v.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col justify-center w-full xl:w-[60%] items-center xl:items-start">
        <div className="flex items-center gap-x-4 py-2">
          {genres.map((genre: string) => (
            <p key={genre} className="border px-2 py-1 rounded-md text-sm">
              {genre}
            </p>
          ))}
        </div>
        <p
          className={`overview mt-4 ${
            movie.overview.length > 300 ? "line-clamp-3" : ""
          }`}
        >
          {movie.overview.split(".")[0] +
            "." +
            movie.overview.split(".")[1] +
            "."}
        </p>
        <div className="flex flex-col justify-center">
          <p className="border-t border-gray-600 py-2">
            <strong>Dirección: </strong>
            {cast.crew
              .filter((c: any) => c.job === "Director")
              .map((c: any) => c.name)
              .join(",  ")}
          </p>
          <p className="border-t border-gray-600 py-2">
            <strong>Guionistas: </strong>
            {cast.crew
              .filter((c: any) => c.department === "Writing")
              .map((c: any) => c.name)
              .join(",  ")}
          </p>
          <p className="border-t border-gray-600 py-2">
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
      <div className="mt-24 flex flex-col xl:flex-row items-center justify-between">
        {images.backdrops && images.backdrops.length > 0 && (
          <div className="mx-auto mb-2 xl:mb-0">
            <p className="text-3xl pb-4">Imágenes</p>
            <Carousel className="w-[250px] xl:w-[600px]">
              <CarouselContent>
                {images.backdrops.map((image: any) => (
                  <CarouselItem key={image.file_path}>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                        alt={movie.title}
                        fill
                        sizes="(100vw - 2rem) 100vh"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black" />
              <CarouselNext className="bg-black" />
            </Carousel>
          </div>
        )}
        {videos.results && videos.results.length > 0 && (
          <div className="mx-auto">
            <p className="text-3xl pb-4">Videos</p>
            <Carousel className="w-[250px] xl:w-[600px]">
              <CarouselContent>
                {videos.results
                  .filter((video: any) => video.type === "Trailer")
                  .map((video: any) => (
                    <CarouselItem key={video.key}>
                      <iframe
                        className="w-[250px] sm:w-[400px] md:w-[700px] xl:w-full h-[300px] xl:h-[450px] aspect-video"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="bg-black" />
              <CarouselNext className="bg-black" />
            </Carousel>
          </div>
        )}
      </div>
      {recommendations.results && recommendations.results.length > 0 && (
        <div className="my-8 flex flex-col items-center justify-center">
          <h4 className="text-3xl pb-8">Recomendaciones</h4>
          <div className="grid items-center justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {recommendations.results.slice(0, 10).map((movie: any) => (
              <Card
                key={movie.id}
                id={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                year={movie.release_date}
                rating={movie.vote_average}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Movie;
