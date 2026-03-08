import Container from "app/components/container";
import { BlogPosts } from "app/components/posts";
import { css } from "styled-system/css";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Container size="xl">
      <section>
        <h1
          className={css({
            textStyle: "heading.page",
            fontSize: "1.5rem",
            marginBottom: "2rem",
          })}
        >
          My Blog
        </h1>
        <BlogPosts />
      </section>
    </Container>
  );
}
