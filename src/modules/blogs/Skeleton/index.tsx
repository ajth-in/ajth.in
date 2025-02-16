import { Skeleton } from "~/components/ui/skeleton";

const BlogsPreviewSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <Skeleton key={index} className="h-[200px] w-full rounded-md" />
      ))}
    </div>
  );
};
export default BlogsPreviewSkeleton;
