"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { css } from "styled-system/css";

type BlogNavProps = {
  prev?: {
    href?: string;
    label?: string;
  };
  next?: {
    href?: string;
    label?: string;
  };
};

const navLinkStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  borderRadius: "md",
  border: "1px solid",
  borderColor: { base: "neutral.300", _dark: "neutral.700" },
  backgroundColor: "surface.page",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  textStyle: "body.sm",
  fontWeight: "500",
  color: { base: "neutral.900", _dark: "neutral.50" },
  transition: "background-color 0.2s",
  _hover: {
    backgroundColor: { base: "neutral.100", _dark: "neutral.700" },
  },
});

const chevronStyle = css({
  height: "1rem",
  width: "1rem",
  transition: "transform 0.2s",
});

export function BlogNavigation({ prev, next }: BlogNavProps) {
  if (!prev?.href && !next?.href) return null;

  return (
    <nav
      aria-label="Blog navigation"
      className={css({
        marginTop: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        maxWidth: "36rem",
      })}
    >
      {prev?.href ? (
        <Link href={prev.href} className={navLinkStyle}>
          <ChevronLeft className={chevronStyle} />
          <span>{prev.label ?? "Previous Section"}</span>
        </Link>
      ) : (
        <div />
      )}

      {next?.href ? (
        <Link href={next.href} className={navLinkStyle}>
          <span>{next.label ?? "Next Section"}</span>
          <ChevronRight className={chevronStyle} />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
