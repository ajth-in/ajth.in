import { Blog } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import AllBlogsLink from "./AllBlogs";
import { DEV_TO_API } from "@/constants";

const BlogsPreview = async () => {
  const response = await fetch(
    `${DEV_TO_API}/articles/latest?username=ajth-in`,
    {
      cache: "force-cache",
    },
  );
  const data = (await response.json()) as Blog[];

  return (
    <section>
      <div className="grid  grid-cols-1 py-4 gap-4">
        {data?.map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
      <AllBlogsLink />
    </section>
  );
};
export default BlogsPreview;
