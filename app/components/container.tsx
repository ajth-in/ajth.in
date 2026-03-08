import { PropsWithChildren } from "react";
import { Navbar } from "./nav";
import Footer from "./footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { css, cx } from "styled-system/css";

type ContainerProps = PropsWithChildren<{
  size: "xl" | "4xl";
}>;

const baseStyle = css({
  marginLeft: "1rem",
  marginRight: "1rem",
  flexGrow: 1,
  minWidth: 0,
  marginTop: "4rem",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  lg: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  md: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const sizeXl = css({ maxWidth: "36rem" });
const size4xl = css({ maxWidth: "56rem" });

const Container = ({ children, size }: ContainerProps) => {
  return (
    <main
      className={cx(
        baseStyle,
        size === "xl" ? sizeXl : size4xl
      )}
    >
      <Navbar />
      {children}
      <Footer />
      <SpeedInsights />
    </main>
  );
};

export default Container;
