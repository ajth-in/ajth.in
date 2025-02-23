import { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";
import { getFeaturedProjects } from "~/operations/queries/featured-projects";
import AllProjectsLink from "../AllProjectsLink";

const ProjectPreview = async () => {
  const projects = await getFeaturedProjects();
  return (
    <Fragment>
      <ul className="py-2">
        {projects.map((project) => (
          <ProjectListItem {...project} key={project.id} />
        ))}
      </ul>
      <AllProjectsLink />
    </Fragment>
  );
};
export default ProjectPreview;
