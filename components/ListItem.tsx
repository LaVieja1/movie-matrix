import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface ListItemProps {
  type: string;
  param: string;
  title: string;
}

const ListItem = ({ param, title, type }: ListItemProps) => {
  return (
    <NavigationMenuLink>
      <Link
        className="hover:text-slate-300 transition"
        href={`?type=${type}&list=${param}`}
      >
        {title}
      </Link>
    </NavigationMenuLink>
  );
};

export default ListItem;
