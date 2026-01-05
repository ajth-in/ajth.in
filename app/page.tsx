import { BlogPosts } from "app/components/posts";
import { Banner } from "./components/banner";
import { Description } from "./components/description";
import Container from "./components/container";
import { CornerYoutubeAudio } from "./components/yt-player";
export default function Page() {
  return (
    <Container size="xl">
      <section>
        <Banner />

        <Description />

        <div className="my-2">
          <BlogPosts />
        </div>
      </section>
      <CornerYoutubeAudio />
    </Container>
  );
}
