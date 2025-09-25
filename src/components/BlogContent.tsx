import { Fragment } from "react";
import { BlogHeader } from "./BlogHeader";
import { Blog } from "@/types/blog";
import { MarkdownRenderer } from "./MarkdownRender";
import { DEV_TO_API } from "@/constants";

type BlogContentProps = { blogId: string };
const BlogContent = async (props: BlogContentProps) => {
  const { blogId } = props;
  const response = await fetch(
    `${DEV_TO_API}/articles/${blogId}?username=ajth-in`,
    {
      cache: "force-cache",
    },
  );
  const data = (await response.json()) as Blog;

  return (
    <Fragment>
      <BlogHeader post={data} />
      <MarkdownRenderer content={data.body_markdown} />
    </Fragment>
  );
};

export default BlogContent;
