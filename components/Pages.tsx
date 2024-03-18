"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "./ui/button";

interface PagesProps {
  list: string;
  page: number;
  totalPages: number;
}

const Pages = ({ list, totalPages }: PagesProps) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mt-10 flex items-center justify-center gap-x-4">
      {totalPages > 1 && (
        <>
          {pages.map((page) => {
            return (
              <Button key={page}>
                <Link href={`/?list=${list}&page=${page}`}>{page}</Link>
              </Button>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Pages;
