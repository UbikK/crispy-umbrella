import StrapiArticle, { StrapiArticleSchema } from "@/types/articles";
import { stringify } from "qs";
import { SafeParseReturnType } from "zod";

export const revalidate = 0;

export async function GET(request: Request) {
  const query = stringify({
    fields: ["title", "excerpt"],
    populate: ["image"],
  });
  const response = await fetch(`${process.env.CMS_URL}/api/articles?${query}`, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  const data = await response.json();

  const parseResult: SafeParseReturnType<StrapiArticle, StrapiArticle>[] =
    data.data.map((art: any) => {
      const result = StrapiArticleSchema.safeParse(art);
      if (!result.success) {
        return result.error;
      } else {
        return result.data;
      }
    });

  return Response.json({ articles: parseResult });
}
