import { redirect } from "next/navigation";
import { Fragment } from "react";
import { HOME } from "~/constants/routes";
import { BlogHeader } from "~/modules/blogs/BlogHeader";
import { MarkdownRenderer } from "~/modules/blogs/MarkdownRender";
import Header from "~/modules/home/Header";
import { type PageProps } from "~/types";

export interface Blog {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: string;
  published_timestamp: string;
  language: string;
  subforem_id: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string;
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: User;
}

export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

const BlogPage = async (props: PageProps) => {
  const blogId = (await props.params).slug;
  if (!blogId) redirect(HOME);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_TO_API}/articles/${blogId}?username=ajith-in`,
  );
  const data = (await response.json()) as Blog;

  return (
    <Fragment>
      <Header className="max-w-4xl" />
      <main className="max-w-4xl mx-auto py-2">
        <BlogHeader post={data} />
        <MarkdownRenderer content={data.body_markdown} />
      </main>
    </Fragment>
  );
};

export default BlogPage;
