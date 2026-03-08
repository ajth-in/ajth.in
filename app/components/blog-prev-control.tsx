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
  border: "1px solid rgb(212 212 212)",
  backgroundColor: "white",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "rgb(23 23 23)",
  transition: "background-color 0.2s",
  _hover: {
    backgroundColor: "rgb(245 245 245)",
  },
  _dark: {
    borderColor: "rgb(64 64 64)",
    backgroundColor: "rgb(38 38 38)",
    color: "rgb(245 245 245)",
    _hover: {
      backgroundColor: "rgb(64 64 64)",
    },
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
