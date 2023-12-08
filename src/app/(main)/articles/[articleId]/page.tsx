import { getUrl } from "@/utils/url";
import Image from "next/image";
import styles from "./index.module.scss";

const getArticle = async (id: string) => {
  return (await fetch(`${getUrl()}/api/articles/${id}?populate=*`)).json();
};

const Page = async ({ params }: { params: { articleId: string } }) => {
  const { article } = await getArticle(params.articleId);
  console.debug("🚀 ~ file: page.tsx:9 ~ Page ~ article:", article);

  return (
    <>
      {/* <pre>
        <code>{JSON.stringify(article.attributes.content, null, 2)}</code>
      </pre> */}
      <article className={styles.article}>
        <div
          className={styles.title}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: article.attributes.image.data
              ? `url(${process.env.CMS_URL}${article.attributes.image.data.attributes.url})`
              : "",
          }}
        >
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.excerpt}</p>
        </div>
        {article.attributes.content.map((part: any, partIndex: number) => {
          switch (part.type) {
            case "image":
              return (
                <p className={styles.image}>
                  <Image
                    src={part.image.url}
                    height={part.image.height}
                    width={part.image.width}
                    alt={part.image.alternativeText}
                  />
                </p>
              );
            default:
              return part.children.map((child: any, i: number) => {
                return (
                  <p key={`${partIndex}-${i}`} className={styles.paragraph}>
                    {child.text}
                  </p>
                );
              });
          }
        })}
      </article>
    </>
  );
};

export default Page;
