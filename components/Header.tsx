"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Lists from "./Lists";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "movie";

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
      <nav className="flex items-center justify-between py-2 px-8 text-white text-xl">
        <Image
          src="/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="mr-4 w-auto h-auto cursor-pointer"
          priority
          onClick={() => router.push("/")}
        />
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-slate-800 text-white flex flex-col items-center w-full px-4">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-slate-600 transition w-full text-center">
                <Link
                  className="hover:text-white/50 transition w-full"
                  href="/"
                >
                  Inicio
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-600 transition w-full text-center">
                <Link
                  className="hover:text-white/50 transition w-full"
                  href="/info"
                >
                  Info
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-600 transition w-full text-center ">
                <Button
                  asChild
                  className={`${type === "movie" ? "text-yellow-500" : ""}`}
                >
                  <Link href="?type=movie" className="w-full">
                    Películas
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-600 transition w-full text-center">
                <Button
                  asChild
                  className={`${type === "tv" ? "text-yellow-500" : ""}`}
                >
                  <Link href="?type=tv" className="w-full">
                    TV
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-slate-600 transition w-full text-center pb-44 px-32">
                <Button>
                  <Lists />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex items-center gap-x-6 mr-auto">
          <Link className="hover:text-white/50 transition" href="/">
            Inicio
          </Link>
          <Link className="hover:text-white/50 transition" href="/info">
            Info
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-6 ">
          <Button>
            <Lists />
          </Button>
          <Button
            asChild
            className={`${type === "movie" ? "text-yellow-500" : ""}`}
          >
            <Link href="?type=movie">Películas</Link>
          </Button>
          <Button
            asChild
            className={`${type === "tv" ? "text-yellow-500" : ""}`}
          >
            <Link href="?type=tv">TV</Link>
          </Button>
        </div>
      </nav>
      <div className="px-8 py-2">
        <Input
          id="search"
          name="search"
          type="search"
          className="w-full rounded-none border-none bg-black text-white"
          placeholder="Buscar..."
          maxLength={50}
          minLength={2}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    </header>
  );
};

export default Header;
