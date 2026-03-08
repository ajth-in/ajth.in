import * as React from "react"
import { css, cx } from "styled-system/css"

const inputStyle = css({
  height: "2.25rem",
  width: "100%",
  minWidth: 0,
  borderRadius: "md",
  border: "1px solid var(--input)",
  backgroundColor: "transparent",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  fontSize: { base: "1rem", md: "0.875rem" },
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  transition: "color 0.2s, box-shadow 0.2s",
  outline: "none",
  _dark: {
    backgroundColor: "rgba(var(--input) / 0.3)",
  },
  _placeholder: {
    color: "var(--muted-foreground)",
  },
  _disabled: {
    pointerEvents: "none",
    cursor: "not-allowed",
    opacity: 0.5,
  },
  _focusVisible: {
    borderColor: "var(--ring)",
    boxShadow: "0 0 0 3px rgba(var(--ring) / 0.5)",
  },
})

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cx(inputStyle, className)}
      {...props}
    />
  )
}

export { Input }
