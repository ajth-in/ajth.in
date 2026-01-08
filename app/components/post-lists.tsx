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
          className="group flex items-baseline gap-4 rounded-md px-2 py-2 transition-colors dark:hover:bg-white/[0.03] hover:bg-black/[0.03]"
        >
          <span className="w-22 shrink-0 font-mono text-[12px] tabular-nums dark:text-neutral-500 text-neutral-800">
            {formatDate(post.metadata.publishedAt, false)}
          </span>
          <span className="text-sm font-medium tracking-tight dark:text-neutral-200 text-neutral-800 transition-colors dark:group-hover:text-neutral-400 group-hover:text-black">
            {post.metadata.title}
          </span>
        </Link>
      ))}
    </>
  );
}
