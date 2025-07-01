import { Fragment } from "react";
import { BlogHeader } from "../BlogHeader";
import { MarkdownRenderer } from "../MarkdownRender";
import { type Blog } from "~/types";

type BlogContentProps = { blogId: string };
const BlogContent = async (props: BlogContentProps) => {
  const { blogId } = props;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_API}/articles/${blogId}?username=ajth-in`,
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
