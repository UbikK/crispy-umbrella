import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import StrapiPagination from "@/types/StrapiPagination";
import StrapiArticle from "@/types/articles";
import { getUrl } from "@/utils/url";
import Link from "next/link";
import styles from "./index.module.scss";

const getArticles: (page?: number) => Promise<{
  articles: StrapiArticle[];
  meta: { pagination: StrapiPagination };
}> = async (page) => {
  return (
    await fetch(`${getUrl()}/api/articles${page ? `?page=${page}` : ""}`, {
      method: "GET",
    })
  ).json();
};

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: number };
}) {
  const { articles, meta } = await getArticles(searchParams.page ?? undefined);

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        {articles.map((article: StrapiArticle) => {
          return (
            <Link
              href={`/articles/${article.id}`}
              key={article.attributes.title}
              className={styles.card}
            >
              <Card
                title={article.attributes.title}
                content={article.attributes.excerpt}
                img={
                  article.attributes.image.data &&
                  `${process.env.CMS_URL}${article.attributes.image.data.attributes.url}`
                }
              />
            </Link>
          );
        })}
      </div>

      <Pagination
        currentPage={meta.pagination.page}
        pageCount={meta.pagination.pageCount}
        pageSize={meta.pagination.pageSize}
        totalCount={meta.pagination.total}
        target={"/articles"}
      />
    </div>
  );
}
