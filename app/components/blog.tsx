"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

type BlogProps = {
  title: string;
  img: string;
  description: string;
  link: string;
};
const Blog = (blog: BlogProps) => {
  return (
    <Link href={blog.link} target={"_blank"}>
      <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer flex items-center">
        <CldImage
          width={100}
          height={100}
          alt={blog.title}
          src={blog.img}
          className={
            "bg-muted rounded-md  mb-4 min-w-[200px] sm:w-full h-full saturate-0 invert brightness-200"
          }
        />
        <h3 className="text-xl tracking-tight">{blog.title}</h3>
        <p className="text-muted-foreground text-base">{blog.description}</p>
      </div>
    </Link>
  );
};

export default Blog;
