import { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";
import Link from "next/link";
import { WORKS } from "~/constants/routes";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "~/operations/queries/featured-projects";

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
        className={cn(buttonVariants({ variant: "link" }), "flex justify-end")}
        href={WORKS}
      >
        View all projects
        <ArrowRight />
      </Link>
    </Fragment>
  );
};
export default ProjectPreview;
