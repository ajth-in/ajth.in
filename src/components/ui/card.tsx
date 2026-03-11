import * as React from "react"
import { css, cx } from "styled-system/css"

const cardStyle = css({
  backgroundColor: "var(--card)",
  color: "var(--card-foreground)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  borderRadius: "xl",
  border: "1px solid var(--border)",
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
})

const cardHeaderStyle = css({
  display: "grid",
  gridAutoRows: "min-content",
  gridTemplateRows: "auto auto",
  alignItems: "start",
  gap: "0.5rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
})

const cardTitleStyle = css({
  lineHeight: 1,
  fontWeight: "500",
})

const cardDescriptionStyle = css({
  color: "var(--muted-foreground)",
  fontSize: "0.875rem",
})

const cardActionStyle = css({
  gridColumnStart: 2,
  gridRow: "1 / span 2",
  gridRowStart: 1,
  alignSelf: "start",
  justifySelf: "end",
})

const cardContentStyle = css({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
})

const cardFooterStyle = css({
  display: "flex",
  alignItems: "center",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
})

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cx(cardStyle, className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cx(cardHeaderStyle, className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cx(cardTitleStyle, className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cx(cardDescriptionStyle, className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cx(cardActionStyle, className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cx(cardContentStyle, className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cx(cardFooterStyle, className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
