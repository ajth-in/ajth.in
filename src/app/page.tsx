"use client";
import MyInfo from "~/modules/home/MyInfo";
import Hero from "~/modules/home/Hero";
import H2 from "~/components/H2";
import ProjectPreview from "~/modules/Projects/ProjectsPreview";

export default function Home() {
  return (
    <main className="pt-4">
      <MyInfo />
      <Hero />
      <H2>Me</H2>
      <p className="text-justify">
        Ajith is a software developer at{" "}
        <a
          href="https://strollby.com/"
          target="_blank"
          className="bg-highlight px-[2px]"
        >
          Strollby
        </a>{" "}
        who loves building fast, accessible web apps. He enjoys writing about
        tech, geeking out over movies, and watching football.
      </p>
      <H2>Things I've made</H2>
      <ProjectPreview />
    </main>
  );
}
