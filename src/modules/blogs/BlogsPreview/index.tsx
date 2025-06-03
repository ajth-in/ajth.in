"use client";

import { useQuery } from "@tanstack/react-query";
import AllBlogsLink from "../AllBlogsLink";
import { BlogCard, type Blog } from "../BlogPreviewCard";
import BlogsPreviewSkeleton from "../Skeleton";

const BlogsPreview = () => {
  const { data, isLoading } = useQuery<Blog[]>({
    queryKey: ["devtoArticles", "ajith-in"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DEV_TO_API}/articles/latest?username=ajith-in`,
      );
      return response.json() as Promise<Blog[]>;
    },
  });
  if (isLoading) return <BlogsPreviewSkeleton />;
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-4">
        {data?.map((blog) => <BlogCard key={blog.id} post={blog} />)}
      </div>
      <AllBlogsLink />
    </section>
  );
};
export default BlogsPreview;
