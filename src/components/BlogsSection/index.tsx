import { Fragment, Suspense } from "react";
import H2 from "../H2";
import BlogsPreviewSkeleton from "~/modules/blogs/Skeleton";
import BlogsPreview from "~/modules/blogs/BlogsPreview";
import { useTranslations } from "next-intl";

const BlogsSection = () => {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <H2>{t("blogs.title")}</H2>
      <Suspense fallback={<BlogsPreviewSkeleton />}>
        <BlogsPreview />
      </Suspense>
    </Fragment>
  );
};
export default BlogsSection;
