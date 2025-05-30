import { Fragment, Suspense } from "react";
import H2 from "../H2";
import BlogsPreviewSkeleton from "~/modules/blogs/Skeleton";
import BlogsPreview from "~/modules/blogs/BlogsPreview";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../ErrorFallback";

const BlogsSection = () => {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <H2>{t("blogs.title")}</H2>
      <ErrorBoundary fallback={<ErrorFallback/>}>
        <Suspense fallback={<BlogsPreviewSkeleton />}>
          <BlogsPreview />
        </Suspense>
        </ErrorBoundary>
    </Fragment>
  );
};
export default BlogsSection;
