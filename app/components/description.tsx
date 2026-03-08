import { css } from "styled-system/css";

const facts = [
  {
    label: "Songs for my Euro truck sim radio",
    href: "https://www.youtube.com/playlist?list=PLo8UW92TnA_Zu3Wt7FL5xCkduVFhlpNQW",
  },
  {
    label: "Big fan of Bukowski's poem",
    href: "https://www.youtube.com/watch?v=Yhi6y1XWb-E",
  },
  {
    label: "Wes Anderson films have a special place in my heart.",
    href: "https://www.youtube.com/watch?v=ELqdLvz60zA",
  },
  {
    label: "Talk to me in English, Malayalam, JS or Python",
    href: "mailto:anything@ajth.in",
  },
];

export function Description() {
  return (
    <section
      className={css({
        maxWidth: "32rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      })}
    >
      <div
        className={css({
          borderRadius: "xl",
          border: "1px solid",
          borderColor: "surface.glass.border",
          backgroundColor: "surface.glass",
          padding: "1rem",
          transition: "all 0.2s",
          _hover: {
            backgroundColor: "surface.glass.hover",
          },
        })}
      >
        <p
          className={css({
            textStyle: "body.default",
            color: "fg",
          })}
        >
          Welcome to my{" "}
          <span
            className={css({
              color: { base: "accent.yellow", _dark: "accent.yellow.dark" },
              fontStyle: "italic",
            })}
          >
            corner
          </span>{" "}
          of the web 🌐✨. Sharing thoughts, projects, and the things I geek out
          on.
        </p>
      </div>

      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          columnGap: "1rem",
          rowGap: "0.125rem",
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        })}
      >
        {facts.map((fact) => (
          <Fact key={fact.label} label={fact.label} href={fact.href} />
        ))}
      </div>
    </section>
  );
}

function Fact({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "0.375rem",
        "&:hover span:first-child": {
          backgroundColor: "accent.green.muted",
        },
        "&:hover span:last-child": {
          color: { base: "neutral.800", _dark: "neutral.200" },
        },
      })}
    >
      <span
        className={css({
          height: "0.25rem",
          width: "0.25rem",
          borderRadius: "9999px",
          backgroundColor: { base: "neutral.200", _dark: "neutral.700" },
          transition: "background-color 0.2s",
        })}
      />
      <span
        className={css({
          fontSize: "12px",
          fontWeight: "500",
          color: "fg.muted",
          transition: "color 0.2s",
        })}
      >
        {label}
      </span>
    </a>
  );
}
