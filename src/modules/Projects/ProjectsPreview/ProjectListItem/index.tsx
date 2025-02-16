"use client";
import { Code2 } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { type SelectTable } from "~/server/db/schema";

const ProjectListItem = (project: SelectTable) => {
  return (
    <li className="py-1 flex items-center space-x-4 group">
      <div className="relative h-10 w-10 flex-shrink-0 flex justify-center items-center">
        <CldImage
          className="text-primary filter dark:invert"
          format="svg"
          src={project.image!}
          alt={project.title}
          width={30}
          height={30}
        />
      </div>
      <div className="flex-grow min-w-0">
        <h3 className="text-md font-medium truncate">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
          {project.description}
        </p>
      </div>
      {!!project.link?.length && (
        <Link
          target="_blank"
          href={project.link}
          className={buttonVariants({ variant: "ghost" })}
        >
          <Code2 />
        </Link>
      )}
    </li>
  );
};
export default ProjectListItem;
