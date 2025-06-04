import { type Blog } from "~/types";
import AllBlogsLink from "../AllBlogsLink";
import { BlogCard } from "../BlogPreviewCard";

const BlogsPreview = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_API}/articles/latest?username=ajith-in`,
    { cache: "force-cache" },
  );
  const data = (await response.json()) as Blog[];

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
