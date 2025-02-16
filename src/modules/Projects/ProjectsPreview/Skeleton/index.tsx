import { Skeleton } from "~/components/ui/skeleton";

const ProjectsPreviewSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 py-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="flex items-center space-x-4" key={index}>
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[350px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectsPreviewSkeleton;
