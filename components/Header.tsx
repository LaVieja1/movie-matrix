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
import { Suspense } from "react";

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
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
    <Suspense>
      <header className="bg-slate-800 w-full">
        <nav className="flex items-center justify-between py-2 px-8 text-white text-xl">
          <Link href="/" className="flex items-center">
            <h1 className="w-16 mr-2 hidden md:block text-sm md:text-xl font-bold text-[#28ccac]">
              Movie Matrix
            </h1>
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="mr-2 md:mr-4 w-8 md:w-auto h-auto"
              priority
            />
          </Link>
          <div className="md:hidden flex items-center justify-center">
            <div className="px-2 md:px-8 py-2 w-full">
              <Input
                id="search"
                name="search"
                type="search"
                className="w-full rounded-none border-none bg-black text-white text-xs"
                placeholder="Buscar..."
                maxLength={50}
                minLength={2}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
              />
            </div>
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
                  <div className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium h-10 px-4 py-2">
                    <Lists />
                  </div>
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
          <div className="hidden md:flex px-8 py-2 mr-auto w-[50%]">
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
          <div className="hidden md:flex items-center gap-x-6 ">
            <div className="inline-flex items-center justify-center whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 rounded-md text-sm font-medium h-10 px-4 py-2">
              <Lists />
            </div>
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
      </header>
    </Suspense>
  );
};

export default Header;
