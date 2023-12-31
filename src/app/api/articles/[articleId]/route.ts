import { NextRequest } from "next/server";

export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: { articleId: string } }
) {
  const response = await fetch(
    `${process.env.CMS_URL}/api/articles/${params.articleId}?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CMS_TOKEN}`,
      },
    }
  );

  const { data: article } = await response.json();
  console.debug("🚀 ~ file: route.ts:13 ~ GET ~ articles:", article);

  return Response.json({ article });
}
