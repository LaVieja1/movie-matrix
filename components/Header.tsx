"use client";

import Link from "next/link";

import { Input } from "./ui/input";
import Lists from "./Lists";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [active, setActive] = useState("movie");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchTerm = e.currentTarget.value;
      if (searchTerm) {
        router.push(`/search/${searchTerm}`);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <header className="bg-slate-800 w-full">
      <nav className="flex items-center justify-between py-4 px-8 text-white text-xl">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="mr-4 w-auto h-auto cursor-pointer"
          priority
          onClick={() => router.push("/")}
        />
        <div className="flex items-center gap-x-6 mr-auto">
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
          <Input
            id="search"
            name="search"
            type="search"
            className="w-64 text-black"
            placeholder="Buscar..."
            maxLength={50}
            minLength={2}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
