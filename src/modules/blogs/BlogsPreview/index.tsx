import { getFeaturedBlogs } from "~/operations/queries/featured-blogs";
import BlogPreviewCard from "../BlogPreviewCard";

const BlogsPreview = async () => {
  const blogs = await getFeaturedBlogs();
  return (
    <div className="grid grid-cols-2 py-4">
      {blogs.map((blog) => (
        <BlogPreviewCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};
export default BlogsPreview;
