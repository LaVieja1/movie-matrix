"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "./ui/button";
import { Suspense } from "react";

interface PagesProps {
  list: string;
  type: string;
  totalPages: number;
}

const Pages = ({ list, totalPages, type }: PagesProps) => {
  const searchParams = useSearchParams();
  const activePage = searchParams.get("page");
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Suspense>
      <div className="mt-10 mb-2 grid grid-cols-3 items-center justify-center justify-items-center gap-x-4 md:flex">
        {totalPages > 1 && (
          <>
            {pages.map((page) => {
              return (
                <Button className="border rounded-none" key={page} asChild>
                  <Link
                    className={`hover:text-yellow-500 transition text-xl max-w-10 ${
                      activePage === page.toString() ? "text-yellow-500" : ""
                    }`}
                    href={
                      type === "movie"
                        ? `/?type=movie&list=${list}&page=${page}`
                        : `/?type=tv&list=${list}&page=${page}`
                    }
                  >
                    {page}
                  </Link>
                </Button>
              );
            })}
          </>
        )}
      </div>
    </Suspense>
  );
};

export default Pages;
