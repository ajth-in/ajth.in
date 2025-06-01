"use client";

import AllProjectsLink from "../AllProjectsLink";
import { useQuery } from "@tanstack/react-query";
import pinnedCommentsQuery, {
  type RepositoryFragment,
} from "~/operations/queries/get-pinned-projects";
import ProjectListItem from "./ProjectListItem";
import { type FragmentOf } from "gql.tada";
import ProjectsPreviewSkeleton from "./Skeleton";

const ProjectPreview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["ajth-in"],
    queryFn: pinnedCommentsQuery,
  });
  if (isLoading) return <ProjectsPreviewSkeleton />;

  return (
    <div className="flex flex-col gap-2 py-4">
      {data?.user?.pinnedItems.nodes?.map((item, index) => (
        <ProjectListItem
          key={index}
          project={item as FragmentOf<typeof RepositoryFragment>}
        />
      ))}
      <AllProjectsLink />
    </div>
  );
};
export default ProjectPreview;
