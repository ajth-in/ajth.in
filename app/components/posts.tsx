import { TabsContent } from "@/components/ui/tabs";
import { getBlogPosts } from "app/blog/utils";
import Image from "next/image";
import { Fragment } from "react";
import { PostList } from "./post-lists";
import BlogTabs from "./tabs";
import Title from "./titele";
import { css } from "styled-system/css";

export function BlogPosts() {
  const _techBlogs = getBlogPosts("tech");
  const _personalPosts = getBlogPosts("life");

  const techPosts = _techBlogs.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1,
  );

  const personalPosts = _personalPosts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1,
  );

  const imageStyle = css({
    width: "70%",
    height: "200px",
    objectFit: "cover",
    objectPosition: "left",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "1rem",
    border: "1px solid rgb(64 64 64)",
    filter: "brightness(0.8)",
    _dark: { borderColor: "rgb(229 229 229)" },
  });

  return (
    <Fragment>
      <Title>Late Night Thoughts</Title>

      <div className={css({ maxWidth: "36rem" })}>
        <BlogTabs>
          <TabsContent value="tech" className={css({ marginTop: 0 })}>
            <Image
              unoptimized
              className={imageStyle}
              alt="Hello world"
              src={"/banner2.gif"}
              width={100}
              height={100}
            />
            <PostList posts={techPosts} />
          </TabsContent>

          <TabsContent
            value="personal"
            className={css({
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            })}
          >
            <Image
              unoptimized
              className={imageStyle}
              alt="Hello world"
              src={"/banner.gif"}
              width={100}
              height={100}
            />
            <PostList posts={personalPosts} />
          </TabsContent>
        </BlogTabs>
      </div>
    </Fragment>
  );
}
