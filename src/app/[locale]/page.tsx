import BlogsSection from "@/components/BlogsSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Kaleidoscope from "@/components/KaleidoScope";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <Kaleidoscope />
      <section className="relative ">
        <Header />
        <div className="flex gap-4 max-w-3xl mx-auto py-3 ">
          <section className="w-full">
            <Hero />
            <BlogsSection />
          </section>
        </div>
      </section>
    </Fragment>
  );
}
