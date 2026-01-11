import { PropsWithChildren } from "react";
import { Navbar } from "./nav";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/lib/utils";
import SignUpForm from "./news-letter";

type ContainerProps = PropsWithChildren<{
  size: "xl" | "4xl";
}>;

const Container = ({ children, size }: ContainerProps) => {
  return (
    <main
      className={cn(
        "mx-4 lg:mx-auto flex-auto min-w-0 mt-16 flex flex-col px-2 md:px-0",
        {
          "max-w-xl": size === "xl",
          "max-w-4xl": size === "4xl",
        }
      )}
    >
      <Navbar />
      {children}
      <hr className="my-12 border-dashed dark:border-neutral-700 border-neutral-300" />
      <SignUpForm />

      <Footer />
      <SpeedInsights />
    </main>
  );
};

export default Container;
