import { BlogPosts } from "app/components/posts";
import { Banner } from "./components/banner";
import Container from "./components/container";
import { Description } from "./components/description";
import { PublicationsSection } from "./components/publications";
import { FeaturedTalks } from "./components/talks";
// import { ToolsSection } from "./components/tools";
import { CornerYoutubeAudio } from "./components/yt-player";
import { css } from "styled-system/css";

export default function Page() {
  return (
    <Container size="xl">
      <section>
        <Banner />

        <Description />

        <div className={css({ marginTop: "0.5rem", marginBottom: "0.5rem", display: 'flex', flexDirection: "column", gap: "1rem" })}>
          <BlogPosts />
          <PublicationsSection />
          <FeaturedTalks />

        </div>
      </section>
      <CornerYoutubeAudio />
    </Container>
  );
}
