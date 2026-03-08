import { BlogPosts } from "app/components/posts";
import { Banner } from "./components/banner";
import Container from "./components/container";
import { Description } from "./components/description";
import { PublicationsSection } from "./components/publications";
import { CornerYoutubeAudio } from "./components/yt-player";
import { css } from "styled-system/css";

export default function Page() {
  return (
    <Container size="xl">
      <section>
        <Banner />

        <Description />

        <div className={css({ marginTop: "0.5rem", marginBottom: "0.5rem" })}>
          <BlogPosts />
          <PublicationsSection />
        </div>
      </section>
      <CornerYoutubeAudio />
    </Container>
  );
}
