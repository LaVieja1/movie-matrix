import Card from "@/components/Card";
import Pages from "@/components/Pages";
import Results from "@/components/Results";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams: { type: string; list: string; page: number };
}

export default async function Home({ searchParams }: HomeProps) {
  const type = searchParams.type || "movie";
  const list = searchParams.list || "popular";
  const page = searchParams.page || 1;
  const res = await fetch(
    `https://api.themoviedb.org/3/${type}/${list}?api_key=${process.env.TMDB_API_KEY}&language=es&page=${page}&region=AR`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const totalPages = data.total_pages;
  const results = data.results;

  return (
    <main className="min-h-screen py-16 px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Results results={results} type={type} />
      </div>
      <Pages list={list} totalPages={totalPages} />
    </main>
  );
}
