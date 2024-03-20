import { useSearchParams } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import ListItem from "./ListItem";

const Lists = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "movie";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black">
            Listas
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col items-center gap-y-2 text-sm py-4 bg-slate-800">
            {type === "movie" ? (
              <>
                <ListItem type="movie" title="Populares" param="popular" />
                <ListItem
                  type="movie"
                  title="Mejor puntación"
                  param="top_rated"
                />
                <ListItem
                  type="movie"
                  title="En cartelera"
                  param="now_playing"
                />
                <ListItem type="movie" title="Proximamente" param="upcoming" />
              </>
            ) : (
              <>
                <ListItem type="tv" title="Populares" param="popular" />
                <ListItem type="tv" title="Mejor puntación" param="top_rated" />
                <ListItem type="tv" title="En el aire" param="on_the_air" />
                <ListItem
                  type="tv"
                  title="Nuevo capítulo"
                  param="airing_today"
                />
              </>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Lists;
