import { TabsContent } from "@/components/ui/tabs";
import { getBlogPosts } from "app/blog/utils";
import Image from "next/image";
import { Fragment } from "react";
import { PostList } from "./post-lists";
import BlogTabs from "./tabs";
import Title from "./titele";

export function BlogPosts() {
  const _techBlogs = getBlogPosts("tech");
  const _personalPosts = getBlogPosts("life");

  const techPosts = _techBlogs.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1,
  );

  const personalPosts = _personalPosts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1,
  );

  return (
    <Fragment>
      <Title>Late Night Thoughts</Title>

      <div className="max-w-xl">
        <BlogTabs>
          <TabsContent value="tech" className="mt-0">
            <Image
              unoptimized
              className="w-[70%] h-[200px] object-cover object-left  my-4 rounded-2xl border dark:border-neutral-200 border-neutral-700 brightness-80"
              alt="Hello world"
              src={"/banner2.gif"}
              width={100}
              height={100}
            />
            <PostList posts={techPosts} />
          </TabsContent>

          <TabsContent value="personal" className="mt-0 space-y-1">
            <Image
              unoptimized
              className="w-[70%] h-[200px] object-cover object-left  my-4 rounded-2xl border dark:border-neutral-200 border-neutral-700 brightness-80"
              alt="Hello world"
              src={"/banner.gif"}
              width={100}
              height={100}
            />
            <PostList posts={personalPosts} />
          </TabsContent>
        </BlogTabs>
      </div>
    </Fragment>
  );
}
