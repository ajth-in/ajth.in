import { PropsWithChildren } from "react";
import { css } from "styled-system/css";

export default function Title(props: PropsWithChildren) {
  return (
    <h2
      className={css({
        marginBottom: "1rem",
        textStyle: "heading.section",
        color: "fg",
      })}
    >
      {props.children}
    </h2>
  );
}
