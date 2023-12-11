import { getUrl } from "@/utils/url";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.formData();

  const payload = {
    email: data.get("email"),
    subject: data.get("subject"),
    content: data.get("content"),
  };

  const body = { data: payload };

  const response = await fetch(`${process.env.CMS_URL}/api/contacts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  return NextResponse.redirect(
    `${getUrl()}/contact?result=${
      response.status === 200 ? "success" : "error"
    }`,
    302
  );
};
