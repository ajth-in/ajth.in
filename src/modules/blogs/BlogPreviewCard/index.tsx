"use client";
import { ArrowRight } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { type SelectBlogs } from "~/server/db/schema";
import { getLang } from "~/utils/get-locale";

const BlogPreviewCard = (blog: SelectBlogs) => {
  const formatter = new Intl.DateTimeFormat(getLang(), {
    day: "numeric",
    month: "short",
    year: "numeric",
    minute: "2-digit",
    hour: "numeric",
    hourCycle: "h12",
  });

  return (
    <div className="flex flex-col">
      <CldImage
        className="rounded-md border-1 border-black dark:border-white w-full"
        src={blog.image}
        width={300}
        height={100}
        alt={blog.title}
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 pt-2">
        {formatter.format(blog.createdAt)}
      </span>
      <h3 className="text-lg truncate">{blog.title}</h3>
      <div className="flex flex-wrap gap-1 py-1 ">
        {blog.tags.map((tag) => (
          <Badge className="py-0 px-1" key={tag}>
            #{tag}
          </Badge>
        ))}
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
        {blog.description}
      </p>
      {!!blog.link?.length && (
        <Link
          href={blog.link}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "flex justify-end w-fit"
          )}
        >
          Read
          <ArrowRight />
        </Link>
      )}
    </div>
  );
};
export default BlogPreviewCard;
