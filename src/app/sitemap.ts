import { type MetadataRoute } from "next";
import { BASE_URL } from "~/constants/routes";
import { type Blog } from "~/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_API}/articles/latest?username=ajth-in`,
  );
  const data = (await response.json()) as Blog[];

  return data.map((blog) => ({
    url: `${BASE_URL}/en/blog/${blog.id}`,
    lastModified: blog.edited_at,
  }));
}
