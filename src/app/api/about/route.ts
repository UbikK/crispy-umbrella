export const GET = async () => {
  const url = `${process.env.CMS_URL}/api/about-page`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  const data = await response.json();
  return Response.json(data);
};
