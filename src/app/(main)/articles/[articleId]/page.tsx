import { getUrl } from "@/utils/url";

const getArticle = async (id: string) => {
  return (await fetch(`${getUrl()}/api/articles/${id}?populate=*`)).json();
};

const Page = async ({ params }: { params: { articleId: string } }) => {
  const article = await getArticle(params.articleId);

  return <>HOy</>;
};

export default Page;
