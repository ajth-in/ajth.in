import MyInfo from "~/modules/home/MyInfo";
import Hero from "~/modules/home/Hero";
import ThingsILove from "~/modules/home/ThingsILove";
import { type PageProps } from "~/types";
import { setRequestLocale } from "next-intl/server";
import AboutMe from "~/components/AboutMe";
import ProjectsSection from "~/components/ProjectsSection";
import BlogsSection from "~/components/BlogsSection";

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="pt-4 max-w-xl  mx-auto">
      <MyInfo />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <BlogsSection />

      <ThingsILove />
    </main>
  );
}
