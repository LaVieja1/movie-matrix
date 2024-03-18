import Card from "@/components/Card";
import Pages from "@/components/Pages";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: { list: string; page: number };
}

export default async function Home({ searchParams }: HomeProps) {
  const list = searchParams.list || "popular";
  const page = searchParams.page || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.TMDB_API_KEY}&language=es&page=${page}&region=AR`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const totalPages = data.total_pages;
  const results = data.results;

  return (
    <main className="min-h-screen py-16 px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
      <Pages list={list} page={page} totalPages={totalPages} />
    </main>
  );
}
