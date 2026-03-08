import { css } from "styled-system/css";

export default function NotFound() {
  return (
    <section>
      <h1
        className={css({
          textStyle: "heading.page",
          fontSize: "1.5rem",
          marginBottom: "2rem",
        })}
      >
        404 - Page Not Found
      </h1>
      <p className={css({ marginBottom: "1rem" })}>
        The page you are looking for does not exist.
      </p>
    </section>
  );
}
