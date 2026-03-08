import { Blog, formatDate } from "app/blog/utils";
import Link from "next/link";
import { css } from "styled-system/css";

export function PostList({ posts }: { posts: Blog[] }) {
  if (posts.length === 0) {
    return (
      <p
        className={css({
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontSize: "0.875rem",
          color: "rgb(115 115 115)",
          fontStyle: "italic",
        })}
      >
        No entries found.
      </p>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={css({
            display: "flex",
            alignItems: "baseline",
            gap: "1rem",
            borderRadius: "md",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            transition: "background-color 0.2s",
            _hover: {
              backgroundColor: "rgba(0, 0, 0, 0.03)",
            },
            _dark: {
              _hover: {
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              },
            },
          })}
        >
          <span
            className={css({
              width: "5.5rem",
              flexShrink: 0,
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "12px",
              fontVariantNumeric: "tabular-nums",
              color: "rgb(38 38 38)",
              _dark: { color: "rgb(115 115 115)" },
            })}
          >
            {formatDate(post.metadata.publishedAt, false)}
          </span>
          <span
            className={css({
              fontSize: "0.875rem",
              fontWeight: "500",
              letterSpacing: "-0.025em",
              lineClamp: 1,
              color: "rgb(38 38 38)",
              transition: "color 0.2s",
              _dark: {
                color: "rgb(229 229 229)",
              },
            })}
          >
            {post.metadata.title}
          </span>
        </Link>
      ))}
    </>
  );
}
