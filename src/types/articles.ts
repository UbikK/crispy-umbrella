import { z } from "zod";

export const StrapiArticleSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    excerpt: z.string(),
    content: z.optional(
      z.array(
        z.object({
          type: z.string(),
          children: z.object({
            type: z.string(),
            text: z.string(),
          }),
        })
      )
    ),
    image: z.object({
      data: z.object({
        id: z.number(),
        attributes: z.object({
          name: z.string(),
          url: z.string(),
        }),
      }),
    }),
  }),
});

type StrapiArticle = z.infer<typeof StrapiArticleSchema>;

export default StrapiArticle;
