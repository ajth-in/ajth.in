import Link from "next/link";

import { formatDate, getBlogPosts } from "app/blog/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  const sortedPosts = allBlogs.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  );

  const techPosts = sortedPosts.filter((post) => post);
  const personalPosts = sortedPosts.filter((post) => post);

  return (
    <div className="max-w-xl">
      <Tabs defaultValue="tech" className="w-full">
        <TabsList className="mb-4 h-9 bg-white/5 border border-white/10 p-1">
          <TabsTrigger
            value="tech"
            className="text-xs uppercase tracking-wider  data-[state=active]:bg-white/10 data-[state=active]:text-neutral-400"
          >
            Builds & Bytes
          </TabsTrigger>
          <TabsTrigger
            value="personal"
            className="text-xs uppercase tracking-wider  data-[state=active]:bg-white/10 data-[state=active]:text-neutral-400"
          >
            Ink & Echoes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tech" className="mt-0 space-y-1">
          <PostList posts={techPosts} />
        </TabsContent>

        <TabsContent value="personal" className="mt-0 space-y-1">
          <PostList posts={personalPosts} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PostList({ posts }: { posts: any[] }) {
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
