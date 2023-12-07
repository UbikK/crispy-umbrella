import StrapiArticle, { StrapiArticleSchema } from "@/types/articles";
import { logError } from "@/utils/errorLogger";
import { stringify } from "qs";
import { SafeParseReturnType, ZodIssue } from "zod";

export const revalidate = 0;

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const searchParams = requestUrl.searchParams;
  const query = stringify({
    fields: ["title", "excerpt"],
    populate: ["image"],
    pagination: {
      pageSize: 3,
      page: searchParams.get("page") ?? 1,
    },
  });
  const url = `${process.env.CMS_URL}/api/articles?${query}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  const data = await response.json();
  const errors: ZodIssue[] = [];

  const parseResult: SafeParseReturnType<StrapiArticle, StrapiArticle>[] =
    data.data
      .map((art: any) => {
        const result = StrapiArticleSchema.safeParse(art);
        if (!result.success) {
          result.error.issues.forEach((issue) => errors.push(issue));
          return undefined;
        } else {
          return result.data;
        }
      })
      .filter((a: StrapiArticle) => !!a);

  if (errors.length) {
    errors.forEach((err) => {
      logError(url, err);
    });
  }

  return Response.json({ articles: parseResult, meta: data.meta });
}
