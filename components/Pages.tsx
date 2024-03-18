"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "./ui/button";

interface PagesProps {
  list: string;
  totalPages: number;
}

const Pages = ({ list, totalPages }: PagesProps) => {
  const searchParams = useSearchParams();
  const activePage = searchParams.get("page");
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mt-10 -mb-10 flex items-center justify-center gap-x-4">
      {totalPages > 1 && (
        <>
          {pages.map((page) => {
            return (
              <Button key={page} asChild>
                <Link
                  className={`hover:text-yellow-500 transition text-xl max-w-12 ${
                    activePage === page.toString() ? "text-yellow-500" : ""
                  }`}
                  href={`/?list=${list}&page=${page}`}
                >
                  {page}
                </Link>
              </Button>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Pages;
