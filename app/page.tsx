import { BlogPosts } from "app/components/posts";
import { HeroSection } from "./components/Hero";
import { SocialLinks } from "./components/Socials";
export default function Page() {
  return (
    <section>
      <div className="flex justify-between gap-4 items-center py-2">
        <HeroSection />
        <SocialLinks />
      </div>
      <p>
        {`Hi, I'm Ajith a Front-End Engineer crrently working at UST. My professional journey is fueled by a deep passion for building user-centric applications. As a dedicated React.js enthusiast, I take pride in creating immersive and user-friendly web applications.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
