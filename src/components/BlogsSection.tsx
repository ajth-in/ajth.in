import { Fragment, Suspense } from "react";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "react-error-boundary";
import BlogsPreviewSkeleton from "./BlogsPreviewSkeleton";
import BlogsPreview from "./BlogsPreview";

const BlogsSection = () => {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <hr className="my-6 border-t-4 border-dashed dark:border-neutral-800 border-neutral-300" />
      <h2 className="font-monosans text-3xl text-center">{t("blogs.title")}</h2>
      <hr className="my-6 border-t-4 border-dashed dark:border-neutral-800 border-neutral-300" />

      <ErrorBoundary fallback={"loading..."}>
        <Suspense fallback={<BlogsPreviewSkeleton />}>
          <BlogsPreview />
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};
export default BlogsSection;
