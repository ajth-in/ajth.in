"use client";
import { Fragment } from "react";

import AllProjectsLink from "../AllProjectsLink";
import { useQuery } from "@tanstack/react-query";
import pinnedCommentsQuery from "~/operations/queries/get-pinned-projects";

const ProjectPreview = () => {
  const response = useQuery({
    queryKey: ["ajth-in"],
    queryFn: pinnedCommentsQuery,
  });

  return (
    <Fragment>
      {JSON.stringify(response.data?.user?.pinnedItems)}
      <AllProjectsLink />
    </Fragment>
  );
};
export default ProjectPreview;
