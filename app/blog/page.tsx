import Container from "app/components/container";
import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Container size="xl">
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          My Blog
        </h1>
        <BlogPosts />
      </section>
    </Container>
  );
}
