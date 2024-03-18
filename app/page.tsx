import Card from "@/components/Card";
import Header from "@/components/Header";

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1",
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;

  const movie = results[0];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-16 px-8">
        {/*
        {results.map((movie: any) => (
          <Card
            key={movie.id}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            description={movie.overview}
            year={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
        */}
        <Card
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
          year={movie.release_date}
          rating={movie.vote_average}
        />
      </div>
    </main>
  );
}
