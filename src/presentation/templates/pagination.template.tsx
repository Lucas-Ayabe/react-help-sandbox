import { Post } from "@/domain";
import { usePagination } from "../../hooks";

type PaginationTemplateProps = {
  posts: Post[];
};

const PaginationTemplate = ({ posts }: PaginationTemplateProps) => {
  const { next, previous, pages, page, nextPage, previousPage, total } =
    usePagination(posts.length, 10);

  return (
    <div className="flow">
      <h1>Paginação</h1>

      {posts.slice(page * 10 - 10, page * 10).map((post) => (
        <article key={post.id} className="card flow">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </article>
      ))}

      <p>Página atual: {page}</p>
      <div className="pagination">
        <button onClick={previous} className="page">
          Anterior ({previousPage})
        </button>

        {pages.map((pageItem) => {
          const activeClass = pageItem.active ? "active" : "";
          return (pageItem.page >= 1 && pageItem.page <= 3) ||
            (pageItem.page >= total - 2 && pageItem.page <= total) ? (
            <a
              key={`page-${pageItem.page}`}
              className={`page ${activeClass}`}
              href=""
            >
              {pageItem.page}
            </a>
          ) : (
            <button key={`page-${pageItem.page}`} className={`page`}>
              ...
            </button>
          );
        })}

        <button onClick={next} className="page">
          Próximo ({nextPage})
        </button>
      </div>
    </div>
  );
};

export default PaginationTemplate;
