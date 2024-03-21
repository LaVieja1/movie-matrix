"use client";

import Link from "next/link";

import { DropdownMenuItem } from "./ui/dropdown-menu";

interface ListItemProps {
  type: string;
  param: string;
  title: string;
}

const ListItem = ({ param, title, type }: ListItemProps) => {
  return (
    <DropdownMenuItem className="w-full bg-slate-800 text-white px-4 hover:bg-slate-600 transition">
      <Link href={`?type=${type}&list=${param}`} className="text-center w-full">
        {title}
      </Link>
    </DropdownMenuItem>
  );
};

export default ListItem;
