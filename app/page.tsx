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

  if (!results || results.length === 0) {
    return <div>No se encontraron resultados</div>;
  }

  async function renderList(list: string) {
    switch (list) {
      case "popular":
        return "Populares";
      case "top_rated":
        return "Mejor puntación";
      case "now_playing":
        return "En cartelera";
      case "upcoming":
        return "Proximamente";
      case "on_the_air":
        return "En el aire";
      case "airing_today":
        return "Nuevo capítulo";
      default:
        return "Populares";
    }
  }

  return (
    <main className="min-h-screen py-4 px-8">
      <div className="flex flex-col justify-center mb-4">
        <h1 className="text-3xl">
          {type === "movie" ? "Peliculas" : "Series"}
        </h1>
        <p>{await renderList(list)}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Results results={results} type={type} />
      </div>
      <Pages list={list} totalPages={totalPages} />
    </main>
  );
}
