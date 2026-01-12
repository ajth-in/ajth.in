import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, generateToc, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import { TableOfContents } from "app/components/toc";
import Container from "app/components/container";
import NewsLetterSignup from "app/components/news-letter";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const slug = (await params).slug;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container size="4xl">
      <section className="mx-auto max-w-5xl">
        <header className="mb-12">
          <h1 className="title font-bold text-4xl tracking-tight mb-4">
            {post.metadata.title}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16 items-start min-h-screen">
          <article className="prose prose-neutral dark:prose-invert max-w-none w-full">
            <CustomMDX source={post.content} />
          </article>

          <aside className="lg:block self-start">
            <TableOfContents items={generateToc(post.content)} />
          </aside>
        </div>
      </section>
      <hr className="my-12 border-dashed dark:border-neutral-700 border-neutral-300" />
      <NewsLetterSignup />
    </Container>
  );
}
