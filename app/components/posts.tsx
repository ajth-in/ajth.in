import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { buttonVariants } from "@/components/ui/button";

export interface DevToListResponse {
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
  collection_id: null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: null | string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date | null;
  crossposted_at: null;
  published_at: string;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

export interface User {
  name: string;
  username: string;
  twitter_username: null;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}
export async function BlogPosts() {
  let response = await fetch(
    "https://dev.to/api/articles/latest?username=ajith-k"
  );
  if (!response.ok) return;
  const blogs: DevToListResponse[] = await response.json();
  return (
    <div>
      {blogs.map((post) => (
        <Link
          key={post.slug}
          className={
            "flex flex-col space-y-1 mb-4 border-gray-400 w-full" +
            buttonVariants({ variant: "outline" })
          }
          href={`/blog/${post.id}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums text-xs font-mono">
              {new Date(post.published_at)?.toLocaleString("en-us", {
                month: "numeric",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight line-clamp-1">
              {post.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
