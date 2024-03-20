import { Github } from "lucide-react";

const Info = () => {
  return (
    <main className="min-h-screen py-4 px-8 z-10 relative text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-3xl underline underline-offset-4 font-bold text-yellow-500">
          Info
        </h1>
        <div className="flex items-center justify-center gap-x-4">
          <a href="https://github.com/LaVieja1" target="_blank">
            <Github size={48} className="hover:scale-110 transition" />
          </a>
        </div>
        <p>Santiago Cano 2024</p>
        <p>
          API by{" "}
          <a
            href="https://www.themoviedb.org"
            className="text-yellow-500 hover:text-yellow-300 transition"
          >
            TMDB
          </a>{" "}
          &copy;
        </p>
      </div>
    </main>
  );
};

export default Info;
