import { useSearchParams } from "next/navigation";
import ListItem from "./ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

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
          <NavigationMenuContent className="flex flex-col items-start gap-y-2 text-sm px-8 py-4">
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
                  title="Nuevo capitulo"
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
