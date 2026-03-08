import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, generateToc, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import { TableOfContents } from "app/components/toc";
import Container from "app/components/container";
import NewsLetterSignup from "app/components/news-letter";
import { BlogNavigation } from "app/components/blog-prev-control";
import { css } from "styled-system/css";

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
      <section className={css({ marginLeft: "auto", marginRight: "auto", maxWidth: "64rem" })}>
        <header className={css({ marginBottom: "3rem" })}>
          <h1
            className={css({
              fontWeight: "700",
              fontSize: "2.25rem",
              letterSpacing: "-0.025em",
              marginBottom: "1rem",
              textWrap: "balance",
            })}
          >
            {post.metadata.title}
          </h1>
          <p
            className={css({
              fontSize: "0.875rem",
              color: "rgb(82 82 82)",
              _dark: { color: "rgb(163 163 163)" },
            })}
          >
            {formatDate(post.metadata.publishedAt)}
          </p>
        </header>

        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
            alignItems: "start",
            minHeight: "100vh",
            lg: {
              gridTemplateColumns: "1fr 250px",
            },
          })}
        >
          <article className="prose">
            <CustomMDX source={post.content} />
          </article>

          <aside
            className={css({
              lg: {
                display: "block",
                position: "sticky",
                top: "100px",
              },
            })}
          >
            <TableOfContents items={generateToc(post.content)} />
          </aside>
        </div>
      </section>
      <BlogNavigation
        next={{ href: post.metadata.next }}
        prev={{ href: post.metadata.prev }}
      />
      <hr
        className={css({
          marginTop: "3rem",
          marginBottom: "3rem",
          borderStyle: "dashed",
          borderColor: "rgb(212 212 212)",
          _dark: { borderColor: "rgb(64 64 64)" },
        })}
      />
      <NewsLetterSignup />
    </Container>
  );
}
