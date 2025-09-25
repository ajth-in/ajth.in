import BlogContent from "@/components/BlogContent";
import Header from "@/components/Header";
import { HOME } from "@/constants/routes";
import { redirect } from "next/navigation";
import { Fragment, Suspense } from "react";

const BlogPage = async (props: PageProps<"/[locale]/blog/[slug]">) => {
  const blogId = (await props.params).slug;
  // @ts-expect-error -- biome-ignore lint/suspicious/noExplicitAny: <explanation>
  if (!blogId) redirect(HOME);

  return (
    <Fragment>
      <Header />
      <main className="max-w-4xl mx-auto py-2">
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center min-h-[600px]">
              Loading...
            </div>
          }
        >
          <BlogContent blogId={blogId} />
        </Suspense>
      </main>
    </Fragment>
  );
};

export default BlogPage;
