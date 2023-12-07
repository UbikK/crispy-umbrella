import Card from "@/components/Card";
import StrapiArticle from "@/types/articles";
import { getUrl } from "@/utils/url";
import Link from "next/link";
import styles from "./index.module.scss";

const getArticles: () => Promise<{ articles: StrapiArticle[] }> = async () => {
  return (
    await fetch(`${getUrl()}/api/articles`, {
      method: "GET",
    })
  ).json();
};

export default async function Page() {
  const { articles } = await getArticles();

  return (
    <div className={styles.container}>
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
              img={`${process.env.CMS_URL}${article.attributes.image.data.attributes.url}`}
            />
          </Link>
        );
      })}
    </div>
  );
}
