import { getFeaturedBlogs } from "~/operations/queries/featured-blogs";
import BlogPreviewCard from "../BlogPreviewCard";
import AllBlogsLink from "../AllBlogsLink";

const BlogsPreview = async () => {
  const blogs = await getFeaturedBlogs();

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-4">
        {blogs.map((blog) => (
          <BlogPreviewCard key={blog.id} {...blog} />
        ))}
      </div>
      <AllBlogsLink />
    </section>
  );
};
export default BlogsPreview;
