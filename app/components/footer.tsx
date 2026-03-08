import { css } from "styled-system/css";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={css({ marginBottom: "4rem" })}>
      <ul
        className={css({
          fontSize: "0.875rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          color: "rgb(82 82 82)",
          md: {
            flexDirection: "row",
            gap: "1rem",
          },
          _dark: { color: "rgb(212 212 212)" },
        })}
      >
        <li>
          <a
            className={css({
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s",
              _hover: {
                color: "rgb(38 38 38)",
              },
              _dark: {
                _hover: { color: "rgb(245 245 245)" },
              },
            })}
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className={css({ marginLeft: "0.5rem", height: "1.75rem" })}>
              rss
            </p>
          </a>
        </li>
        <li>
          <a
            className={css({
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s",
              _hover: {
                color: "rgb(38 38 38)",
              },
              _dark: {
                _hover: { color: "rgb(245 245 245)" },
              },
            })}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ajth-in"
          >
            <ArrowIcon />
            <p className={css({ marginLeft: "0.5rem", height: "1.75rem" })}>
              github
            </p>
          </a>
        </li>
      </ul>
      <p
        className={css({
          marginTop: "2rem",
          color: "rgb(82 82 82)",
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.75rem",
          _dark: { color: "rgb(212 212 212)" },
        })}
      >
        © {new Date().getFullYear()} Ajith Kumar P M
      </p>
    </footer>
  );
}
