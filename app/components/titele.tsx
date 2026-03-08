import { PropsWithChildren } from "react";
import { css } from "styled-system/css";

export default function Title(props: PropsWithChildren) {
  return (
    <h2
      className={css({
        marginBottom: "1rem",
        fontSize: "1rem",
        fontWeight: "500",
        color: "rgb(23 23 23)",
        _dark: { color: "rgb(212 212 212)" },
      })}
    >
      {props.children}
    </h2>
  );
}
