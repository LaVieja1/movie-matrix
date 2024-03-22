"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, use, useEffect, useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

interface PagesProps {
  list: string;
  type: string;
  totalPages: number;
}

const Pages = ({ list, totalPages, type }: PagesProps) => {
  const searchParams = useSearchParams();
  const activePage = searchParams.get("page");
  const router = useRouter();
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    if (list) {
      setPages([1, 2, 3, 4, 5]);
    }

    if (activePage === "1") {
      setPages([1, 2, 3, 4, 5]);
    }

    if (activePage) {
      setPages([
        parseInt(activePage),
        parseInt(activePage) + 1,
        parseInt(activePage) + 2,
        parseInt(activePage) + 3,
        parseInt(activePage) + 4,
      ]);
    }

    if (Number(activePage) >= 46) {
      setPages([
        Number(activePage) - 2,
        Number(activePage) - 1,
        Number(activePage),
        Number(activePage) + 1,
        Number(activePage) + 2,
      ]);
    }

    if (activePage === "49") {
      setPages([
        parseInt(activePage) - 3,
        parseInt(activePage) - 2,
        parseInt(activePage) - 1,
        parseInt(activePage),
        parseInt(activePage) + 1,
      ]);
    }

    if (activePage === "50") {
      setPages([
        parseInt(activePage) - 4,
        parseInt(activePage) - 3,
        parseInt(activePage) - 2,
        parseInt(activePage) - 1,
        parseInt(activePage),
      ]);
    }
  }, [activePage, list]);

  const maxLength = 50;
  const length = Math.min(totalPages, maxLength);

  let lastPage = Array.from({ length }, (_, i) => i + 1);

  const handlePages = (page: number) => {
    setPages([page - 2, page - 1, page, page + 1, page + 2]);

    if (page === 1) {
      setPages([page, page + 1, page + 2, page + 3, page + 4]);
    }
    if (page === lastPage.length) {
      setPages([page - 4, page - 3, page - 2, page - 1, page]);
    }
  };

  const handleFirstPage = () => {
    router.push(`/?type=${type}&list=${list}&page=1`);
  };

  const handleLastPage = () => {
    router.push(`/?type=${type}&list=${list}&page=46`);
  };

  return (
    <Suspense>
      <Pagination className="mt-10 mb-2 items-center justify-center flex">
        <PaginationContent>
          {totalPages > 1 && (
            <>
              <PaginationItem className="hover:opacity-50">
                <PaginationPrevious
                  onClick={() => handlePages(Number(activePage) - 1)}
                  className={`${
                    pages[0] === 1 ? "hidden" : "flex"
                  } hidden md:flex`}
                  href={`/?type=${type}&list=${list}&page=${
                    Number(activePage) - 1
                  }`}
                />
              </PaginationItem>
              <PaginationEllipsis
                className={`${
                  pages[0] === 1
                    ? "hidden"
                    : "flex cursor-pointer hover:opacity-50"
                }`}
                onClick={() => handleFirstPage()}
              />
              {pages.map((page) => {
                return (
                  <PaginationItem key={page} className="hover:opacity-50">
                    <PaginationLink
                      onClick={() => handlePages(page)}
                      className={`hover:text-yellow-500 transition text-xl max-w-10 ${
                        activePage === page.toString() ? "text-yellow-500" : ""
                      }`}
                      href={`/?type=${type}&list=${list}&page=${page}`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationEllipsis
                  className={`${
                    pages.includes(50) ? "hidden" : "flex"
                  } cursor-pointer hover:opacity-50`}
                  onClick={() => handleLastPage()}
                />
              </PaginationItem>
              <PaginationItem className="hover:opacity-50">
                <PaginationNext
                  onClick={() => handlePages(Number(activePage) + 1)}
                  className={`${
                    pages.includes(50) ? "hidden" : "flex"
                  } hidden md:flex`}
                  href={`/?type=${type}&list=${list}&page=${
                    Number(activePage) + 1
                  }`}
                />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
    </Suspense>
  );
};

export default Pages;
