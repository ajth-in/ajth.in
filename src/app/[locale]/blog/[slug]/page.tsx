import { redirect } from "next/navigation";
import { Fragment, Suspense } from "react";
import Spinner from "~/components/Spinner";
import { HOME } from "~/constants/routes";
import BlogContent from "~/modules/blogs/BlogContent";
import Header from "~/modules/home/Header";
import { type PageProps } from "~/types";

const BlogPage = async (props: PageProps) => {
  const blogId = (await props.params).slug;
  if (!blogId) redirect(HOME);

  return (
    <Fragment>
      <Header className="max-w-4xl" />
      <main className="max-w-4xl mx-auto py-2">
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center min-h-[600px]">
              <Spinner />
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
