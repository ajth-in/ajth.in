import AllProjectsLink from "../AllProjectsLink";
import pinnedCommentsQuery, {
  type RepositoryFragment,
} from "~/operations/queries/get-pinned-projects";
import ProjectListItem from "./ProjectListItem";
import { type FragmentOf } from "gql.tada";

const ProjectPreview = async () => {
  const data = await pinnedCommentsQuery();
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
