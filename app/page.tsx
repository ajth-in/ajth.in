import { BlogPosts } from "app/components/posts";
import { Banner } from "./components/banner";
import { Description } from "./components/description";
export default function Page() {
  return (
    <section>
      <Banner />

      <Description />

      <div className="my-2">
        <BlogPosts />
      </div>
    </section>
  );
}
