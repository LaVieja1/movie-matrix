"use client";

import { useSearchParams } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import ListItem from "./ListItem";

const Lists = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "movie";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center">
        <p>Listas</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 text-white flex flex-col items-center w-full text-center rounded-none">
        <DropdownMenuLabel className="border-b border-slate-600 w-full">
          Listas
        </DropdownMenuLabel>
        {type === "movie" ? (
          <>
            <ListItem type="movie" title="Populares" param="popular" />
            <ListItem type="movie" title="Mejor puntación" param="top_rated" />
            <ListItem type="movie" title="En cartelera" param="now_playing" />
            <ListItem type="movie" title="Proximamente" param="upcoming" />
          </>
        ) : (
          <>
            <ListItem type="tv" title="Populares" param="popular" />
            <ListItem type="tv" title="Mejor puntación" param="top_rated" />
            <ListItem type="tv" title="En el aire" param="on_the_air" />
            <ListItem type="tv" title="Nuevo capítulo" param="airing_today" />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Lists;
