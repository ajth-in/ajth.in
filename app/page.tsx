import { Products } from "app/components/posts";
import { HeroSection } from "./components/Hero";
import { Fragment } from "react";
import { Blogs } from "./components/blogs";

export default function Page() {
  return (
    <Fragment>
      <section className={"z-10"}>
        <HeroSection />
        <Blogs />
        <Products />
      </section>
    </Fragment>
  );
}