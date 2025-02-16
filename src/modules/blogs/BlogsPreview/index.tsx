import { getFeaturedBlogs } from "~/operations/queries/featured-blogs";
import BlogPreviewCard from "../BlogPreviewCard";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { BLOGS } from "~/constants/routes";
import { ArrowRight } from "lucide-react";

const BlogsPreview = async () => {
  const blogs = await getFeaturedBlogs();
  return (
    <section>
      <div className="grid grid-cols-2 py-4 gap-4">
        {blogs.map((blog) => (
          <BlogPreviewCard key={blog.id} {...blog} />
        ))}
      </div>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "flex justify-end")}
        href={BLOGS}
      >
        View all blogs
        <ArrowRight />
      </Link>
    </section>
  );
};
export default BlogsPreview;
