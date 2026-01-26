import { BlogPosts } from "app/components/posts";
import { Banner } from "./components/banner";
import Container from "./components/container";
import { Description } from "./components/description";
import { PublicationsSection } from "./components/publications";
import { CornerYoutubeAudio } from "./components/yt-player";
export default function Page() {
  return (
    <Container size="xl">
      <section>
        <Banner />

        <Description />

        <div className="my-2">
          <BlogPosts />
          <PublicationsSection />
        </div>
      </section>
      <CornerYoutubeAudio />
    </Container>
  );
}
