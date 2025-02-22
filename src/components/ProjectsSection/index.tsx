import { Fragment, Suspense } from "react";
import ProjectsPreviewSkeleton from "~/modules/Projects/ProjectsPreview/Skeleton";
import H2 from "../H2";
import ProjectPreview from "~/modules/Projects/ProjectsPreview";
import { useTranslations } from "next-intl";

const ProjectsSection = () => {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <H2>{t("works.title")}</H2>
      <Suspense fallback={<ProjectsPreviewSkeleton />}>
        <ProjectPreview />
      </Suspense>
    </Fragment>
  );
};
export default ProjectsSection;
