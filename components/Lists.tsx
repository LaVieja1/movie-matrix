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
          <NavigationMenuContent className="flex flex-col items-center gap-y-2 flex-1 text-sm px-8 py-4">
            <ListItem title="Populares" param="popular" />
            <ListItem title="Mejor puntación" param="top_rated" />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Lists;
