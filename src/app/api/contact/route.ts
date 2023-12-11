import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();

  const body = { data };

  const response = await fetch(`${process.env.CMS_URL}/api/contacts`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  return NextResponse.json(await response.json());
};
