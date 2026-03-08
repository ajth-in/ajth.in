import Link from "next/link";
import { Mic2 } from "lucide-react";
import Title from "./titele";
import { css } from "styled-system/css";

export const talks = [
  {
    title:
      "State Machines: The Last State Management Solution You'll Ever Need",
    summary:
      "Examines how state machines address core frontend challenges and how AI enhances their solutions. Covers building state machines with XState in React, Angular, or Vue, and using Stately.ai to extend and visualize them. Focuses on real production patterns — authentication flows, micro frontend consistency, and predictable transitions.",
    event: "TechMang'26",
    eventUrl: "https://hackersmang.org/techmang26",
    location: "Mangalore",
    date: "Jan 2026",
  },
];

export function FeaturedTalks() {
  if (!talks.length) return null;

  return (
    <section>
      <Title>Featured Talks</Title>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          position: "relative",
        })}
      >
        {talks.map((talk, index) => (
          <Link
            key={index}
            href={talk.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "1rem",
              padding: "0.75rem",
              borderRadius: "lg",
              transition: "all 0.2s",
              textDecoration: "none",
              _hover: {
                backgroundColor: "surface.glass.subtle",
                "& .talk-title": {
                  textDecorationColor: "currentColor",
                },
              },
            })}
          >
            {/* Left accent column */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                paddingTop: "0.125rem",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "md",
                  backgroundColor: { base: "rgba(74, 222, 128, 0.1)", _dark: "rgba(74, 222, 128, 0.15)" },
                  color: "accent.green",
                  flexShrink: 0,
                })}
              >
                <Mic2 size={14} />
              </div>
              <div
                className={css({
                  width: "1px",
                  flexGrow: 1,
                  background: {
                    base: "linear-gradient(to bottom, {colors.neutral.200}, transparent)",
                    _dark: "linear-gradient(to bottom, {colors.neutral.700}, transparent)",
                  },
                })}
              />
            </div>

            {/* Content */}
            <div className={css({ display: "flex", flexDirection: "column", gap: "0.375rem" })}>
              <p
                className={css({
                  textStyle: "body.sm",
                  fontWeight: "600",
                  lineHeight: "1.4",
                  color: { base: "neutral.900", _dark: "neutral.100" },
                  textDecoration: "underline",
                  textDecorationColor: "transparent",
                  textUnderlineOffset: "2px",
                  transition: "text-decoration-color 0.2s",
                })}
              >
                {talk.title}
              </p>

              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  flexWrap: "wrap",
                })}
              >
                <span
                  className={css({
                    textStyle: "body.xs",
                    fontWeight: "600",
                    color: "accent.green",
                  })}
                >
                  {talk.event}
                </span>
                <span className={css({ color: "fg.subtle", fontSize: "10px" })}>•</span>
                <span className={css({ textStyle: "body.xs", color: "fg.muted" })}>
                  {talk.location}
                </span>
                <span className={css({ color: "fg.subtle", fontSize: "10px" })}>•</span>
                <span
                  className={css({
                    textStyle: "mono",
                    fontSize: "11px",
                    color: "fg.subtle",
                  })}
                >
                  {talk.date}
                </span>
              </div>

              <p
                className={css({
                  textStyle: "body.xs",
                  lineHeight: "1.6",
                  color: "fg.muted",
                  lineClamp: 2,
                })}
              >
                {talk.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
