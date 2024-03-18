import ListItem from "./ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Lists = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black">
            Listas
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col items-start gap-y-2 text-sm px-8 py-4">
            <ListItem title="Populares" param="popular" />
            <ListItem title="Mejor puntación" param="top_rated" />
            <ListItem title="En cartelera" param="now_playing" />
            <ListItem title="Proximamente" param="upcoming" />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Lists;
