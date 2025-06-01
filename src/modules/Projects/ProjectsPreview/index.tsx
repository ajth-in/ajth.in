"use client";
import { Fragment } from "react";

import AllProjectsLink from "../AllProjectsLink";
import { useQuery } from "@tanstack/react-query";
import fetchPinnedProjects from "~/operations/queries/get-pinned-projects";

const ProjectPreview = () => {
  const response = useQuery({
    queryKey: ["ajth-in"],
    queryFn: fetchPinnedProjects,
  });

  if (!response.data?.user) throw new Error("Invalid user");

  return (
    <Fragment>
      {JSON.stringify(response.data?.user?.pinnedItems)}
      <AllProjectsLink />
    </Fragment>
  );
};
export default ProjectPreview;
