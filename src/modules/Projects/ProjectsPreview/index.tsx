import { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";
import Link from "next/link";
import { WORKS } from "~/constants/routes";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "~/operations/queries/featured-projects";

export const projects = [
  {
    id: "1",
    title: "Project Alpha",
    subtitle: "A revolutionary app",
    link: "/projects/alpha",
  },
  {
    id: "2",
    title: "Project Beta",
    subtitle: "Cutting-edge technology",
    link: "/projects/beta",
  },
  {
    id: "3",
    title: "Project Gamma",
    subtitle: "Innovative solutions",
    link: "/projects/gamma",
  },
];
const ProjectPreview = async () => {
  const projects = await getFeaturedProjects();
  return (
    <Fragment>
      <ul className="py-2">
        {projects.map((project) => (
          <ProjectListItem {...project} key={project.id} />
        ))}
      </ul>
      <Link
        className={cn(buttonVariants({ variant: "link" }), "float-right")}
        href={WORKS}
      >
        View all projects
        <ArrowRight />
      </Link>
    </Fragment>
  );
};
export default ProjectPreview;
