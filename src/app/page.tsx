import MyInfo from "~/modules/home/MyInfo";
import Hero from "~/modules/home/Hero";
import H2 from "~/components/H2";
import ProjectPreview from "~/modules/Projects/ProjectsPreview";
import { Suspense } from "react";
import ProjectsPreviewSkeleton from "~/modules/Projects/ProjectsPreview/Skeleton";
import BlogsPreview from "~/modules/blogs/BlogsPreview";
import BlogsPreviewSkeleton from "~/modules/blogs/Skeleton";
import { COMPANY } from "~/constants/routes";
import ThingsILove from "~/modules/home/ThingsILove";

export default function Home() {
  return (
    <main className="pt-4">
      <MyInfo />
      <Hero />
      <H2>Me</H2>
      <p className="text-justify [&>a]:bg-highlight [&>a]:px-[2px]">
        Ajith is a software developer at{" "}
        <a href={COMPANY} target="_blank" className="bg-highlight px-[2px]">
          Strollby
        </a>{" "}
        who loves building fast, accessible web apps. He enjoys writing about
        tech, geeking out over movies, and watching football.
      </p>
      <H2>Things I&apos;ve made</H2>
      <Suspense fallback={<ProjectsPreviewSkeleton />}>
        <ProjectPreview />
      </Suspense>
      <H2>Things I&apos;ve wrote</H2>
      <Suspense fallback={<BlogsPreviewSkeleton />}>
        <BlogsPreview />
      </Suspense>
      <H2>Things I 🤍</H2>
      <ThingsILove />
    </main>
  );
}
