import { BlogPosts } from "app/components/posts";
import { HeroSection } from "./components/Hero";
export default function Page() {
  return (
    <section>
      <HeroSection />
      <p>
        {`I'm Ajith Kumar P M, but you can call me Ajith. I'm a front-end engineer based on India. Here are a few projects and experiences I've made so far.`}
      </p>
      <hr className="border-.1-dashed" />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
