import { NavigationMenuLink } from "./ui/navigation-menu";

interface ListItemProps {
  type: string;
  param: string;
  title: string;
}

const ListItem = ({ param, title, type }: ListItemProps) => {
  return (
    <NavigationMenuLink
      href={`?type=${type}&list=${param}`}
      className="w-full bg-slate-800 text-white text-center px-4 hover:bg-slate-600 transition"
    >
      {title}
    </NavigationMenuLink>
  );
};

export default ListItem;
