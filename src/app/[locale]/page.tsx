import BlogsSection from "@/components/BlogsSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <Fragment>
      <Header />

      <div className="flex gap-4 max-w-3xl mx-auto py-3">
        <section className="w-full">
          <Hero />
          <BlogsSection />
        </section>
      </div>
    </Fragment>
  );
}
