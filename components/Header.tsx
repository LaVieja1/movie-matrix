"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Input } from "./ui/input";
import Lists from "./Lists";

const Header = () => {
  const searchParams = useSearchParams();
  const list = searchParams.get("list");

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
          <Lists />
          <Input type="search" className="w-64" placeholder="Buscar..." />
        </div>
      </nav>
    </header>
  );
};

export default Header;
