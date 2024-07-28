import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import { buttonVariants } from "@/components/ui/button";

export default async function Blog({ params: { slug } }) {
  const response = await fetch(`https://dev.to/api/articles/${slug}`);
  if (!response.ok) return;
  const data = await response.json();
  return (
    <section>
      <h1 className="text-3xl py-4">{data.title}</h1>
      <a
        href={data.url}
        target="_blank"
        className={
          buttonVariants({
            variant: "ghost",
          }) + " my-4 "
        }
      >
        Read this in
        <img
          className="w-8 mx-2"
          src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt="Dev.to"
        />
      </a>

      <div dangerouslySetInnerHTML={{ __html: data.body_html }} />
    </section>
  );
}
