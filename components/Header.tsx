"use client";

import Link from "next/link";

import { Input } from "./ui/input";
import Lists from "./Lists";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("movie");

  return (
    <header className="bg-slate-800 w-full">
      <nav className="flex items-center justify-between p-4 text-white text-xl">
        <div className="flex items-center gap-x-6">
          <Link className="hover:text-white/50 transition" href="/">
            Inicio
          </Link>
          <Link className="hover:text-white/50 transition" href="/info">
            Info
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <Button
            asChild
            onClick={() => setActive("movie")}
            className={`${active === "movie" ? "text-yellow-500" : ""}`}
          >
            <Link href="?type=movie">Películas</Link>
          </Button>
          <Button
            asChild
            onClick={() => setActive("tv")}
            className={`${active === "tv" ? "text-yellow-500" : ""}`}
          >
            <Link href="?type=tv">TV</Link>
          </Button>
          <Lists />
          <Input type="search" className="w-64" placeholder="Buscar..." />
        </div>
      </nav>
    </header>
  );
};

export default Header;
