import Card from "@/components/Card";
import Results from "@/components/Results";

const searchPage = async ({ params }: { params: { searchTerm: string } }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.TMDB_API_KEY}&language=es&query=${params.searchTerm}&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("No se pudo obtener data de la API");
  }

  const data = await res.json();
  const results = data.results.filter(
    (result: any) => result.media_type === "movie" || result.media_type === "tv"
  );

  console.log(results);

  return (
    <main className="min-h-screen py-4 px-8">
      <div className="flex flex-col justify-center mb-4">
        <h1 className="text-3xl font-bold">
          Resultados: {params.searchTerm.replace(/%20/g, " ")}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {results.map((result: any) => (
          <>
            {result.media_type === "movie" ? (
              <Card
                mediaType={result.media_type}
                id={result.id}
                key={result.id}
                image={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                title={result.title}
                year={result.release_date}
                rating={result.vote_average}
              />
            ) : (
              <Card
                mediaType={result.media_type}
                id={result.id}
                key={result.id}
                image={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                title={result.name}
                year={result.first_air_date}
                rating={result.vote_average}
              />
            )}
          </>
        ))}
      </div>
    </main>
  );
};

export default searchPage;
