import { MoveRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Blog from "./blog";
import Link from "next/link";

export const Blogs = () => {
  const featureBlogs = [
    {
      title: "How to deploy a Django application",
      img: "Designer_9_bxwxzc",
      description: "Set up and deploy a Django application on a Linux server",
      link: "https://dev.to/ajith-k/how-to-set-up-and-deploy-a-django-application-on-a-linux-server-2dff",
    },
    {
      title: "Pre/post-Commit hooks for Node.js",
      img: "Designer_6_t6xzbp",
      description:
        "Add Pre/post-Commit hooks to your Node.js project using lefthook",
      link: "https://dev.to/ajith-k/how-to-use-lefthooks-in-your-node-project-3i83",
    },
    {
      title: "Websockets in Django",
      img: "Designer_7_qn8t43",
      description: "Implement websockets in django without using channels",
      link: "https://dev.to/ajith-k/websockets-in-django-without-channels-108g",
    },
  ];
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            Latest articles
          </h4>
          <Link
            href={"https://dev.to/ajith-k"}
            className={buttonVariants({ variant: "default" })}
          >
            View all articles{" "}
            <MoveRight className="w-4 h-4 mx-1" target={"_blank"} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureBlogs.map((blog) => (
            <Blog key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};
