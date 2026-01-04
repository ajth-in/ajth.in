import { Blog, formatDate } from "app/blog/utils";
import Link from "next/link";

export function PostList({ posts }: { posts: Blog[] }) {
  if (posts.length === 0) {
    return (
      <p className="px-2 py-4 text-sm text-neutral-500 italic">
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
          className="group flex items-baseline gap-4 rounded-md px-2 py-2 transition-colors hover:bg-white/[0.03]"
        >
          <span className="w-24 shrink-0 font-mono text-[12px] tabular-nums text-neutral-500">
            {formatDate(post.metadata.publishedAt, false)}
          </span>
          <span className="text-sm font-medium tracking-tight text-neutral-200 transition-colors group-hover:text-neutral-400">
            {post.metadata.title}
          </span>
        </Link>
      ))}
    </>
  );
}
