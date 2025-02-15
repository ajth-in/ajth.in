import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { projects } from "..";

const ProjectListItem = (project: (typeof projects)[number]) => {
  return (
    <li className="py-1 flex items-center space-x-4 group">
      <div className="relative h-10 w-10 flex-shrink-0">{project.id}</div>
      <div className="flex-grow min-w-0">
        <h3 className="text-md font-medium truncate">{project.title}</h3>
        <p className="text-sm text-gray-500 truncate">{project.subtitle}</p>
      </div>
      <Link href={project.link} className={buttonVariants({ variant: "link" })}>
        <Github />
        View
      </Link>
    </li>
  );
};
export default ProjectListItem;
