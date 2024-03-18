import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface ListItemProps {
  param: string;
  title: string;
}

const ListItem = ({ param, title }: ListItemProps) => {
  return (
    <NavigationMenuLink>
      <Link href={`/?list=${param}`}>{title}</Link>
    </NavigationMenuLink>
  );
};

export default ListItem;
