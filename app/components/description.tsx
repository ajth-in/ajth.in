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
          border: "1px solid rgba(0, 0, 0, 0.05)",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          padding: "1rem",
          transition: "all 0.2s",
          _hover: {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
          _dark: {
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            _hover: {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        })}
      >
        <p
          className={css({
            fontSize: "0.875rem",
            lineHeight: "1.625",
            color: "rgb(23 23 23)",
            _dark: { color: "rgb(212 212 212)" },
          })}
        >
          Welcome to my{" "}
          <span
            className={css({
              color: "rgb(113 63 18)",
              fontStyle: "italic",
              _dark: { color: "rgba(254, 240, 138, 0.8)" },
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
          backgroundColor: "rgb(34 197 94)",
        },
        "&:hover span:last-child": {
          color: "rgb(38 38 38)",
        },
        _dark: {
          "&:hover span:last-child": {
            color: "rgb(229 229 229)",
          },
        },
      })}
    >
      <span
        className={css({
          height: "0.25rem",
          width: "0.25rem",
          borderRadius: "9999px",
          backgroundColor: "rgb(229 229 229)",
          transition: "background-color 0.2s",
          _dark: { backgroundColor: "rgb(64 64 64)" },
        })}
      />
      <span
        className={css({
          fontSize: "12px",
          fontWeight: "500",
          color: "rgb(82 82 82)",
          transition: "color 0.2s",
          _dark: { color: "rgb(163 163 163)" },
        })}
      >
        {label}
      </span>
    </a>
  );
}
