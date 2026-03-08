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
          textStyle: "body.sm",
          color: "fg.subtle",
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
              backgroundColor: "surface.glass.subtle",
            },
          })}
        >
          <span
            className={css({
              width: "5.5rem",
              flexShrink: 0,
              textStyle: "mono",
              fontSize: "12px",
              color: { base: "neutral.800", _dark: "neutral.500" },
            })}
          >
            {formatDate(post.metadata.publishedAt, false)}
          </span>
          <span
            className={css({
              textStyle: "body.sm",
              fontWeight: "500",
              letterSpacing: "-0.025em",
              lineClamp: 1,
              color: { base: "neutral.800", _dark: "neutral.200" },
              transition: "color 0.2s",
            })}
          >
            {post.metadata.title}
          </span>
        </Link>
      ))}
    </>
  );
}
