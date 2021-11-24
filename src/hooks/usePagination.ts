import { useState } from "react";

const increment = (n: number) => n + 1;

const usePagination = (total: number, steps: number, startPage = 1) => {
  const [page, setPage] = useState(startPage);
  const totalPages = Math.ceil(total / steps);
  const pages = [...Array(totalPages).keys()].map(increment).map((n) => ({
    page: n,
    active: n === page,
  }));

  const previousPage = page - 1 >= 1 ? page - 1 : 1;
  const nextPage = page + 1 <= totalPages ? page + 1 : totalPages;

  return {
    next: () => setPage(nextPage),
    previous: () => setPage(previousPage),
    nextPage,
    previousPage,
    page,
    pages,
    total: totalPages,
  };
};

export default usePagination;
