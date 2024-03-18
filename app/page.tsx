import Card from "@/components/Card";
import Header from "@/components/Header";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;

  const movie = results[0];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-16 px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.map((movie: any) => (
          <Card
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            year={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
