import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface ListItemProps {
  param: string;
  title: string;
}

const ListItem = ({ param, title }: ListItemProps) => {
  return (
    <NavigationMenuLink>
      <Link
        className="hover:text-slate-300 transition"
        href={`/?list=${param}`}
      >
        {title}
      </Link>
    </NavigationMenuLink>
  );
};

export default ListItem;
