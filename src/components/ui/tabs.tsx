"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { css, cx } from "styled-system/css"

const tabsStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

const tabsListStyle = css({
  backgroundColor: "var(--muted)",
  color: "var(--muted-foreground)",
  display: "inline-flex",
  height: "2.25rem",
  width: "fit-content",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "lg",
  padding: "3px",
})

const tabsTriggerStyle = css({
  display: "inline-flex",
  height: "calc(100% - 1px)",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  gap: "0.375rem",
  borderRadius: "md",
  border: "1px solid transparent",
  paddingLeft: "0.5rem",
  paddingRight: "0.5rem",
  paddingTop: "0.25rem",
  paddingBottom: "0.25rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  whiteSpace: "nowrap",
  transition: "color 0.2s, box-shadow 0.2s",
  color: "var(--foreground)",
  _disabled: {
    pointerEvents: "none",
    opacity: 0.5,
  },
  '&[data-state="active"]': {
    backgroundColor: "var(--background)",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  },
  _dark: {
    color: "var(--muted-foreground)",
    '&[data-state="active"]': {
      color: "var(--foreground)",
      borderColor: "var(--input)",
      backgroundColor: "rgba(var(--input) / 0.3)",
    },
  },
})

const tabsContentStyle = css({
  flex: 1,
  outline: "none",
})

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cx(tabsStyle, className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cx(tabsListStyle, className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cx(tabsTriggerStyle, className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cx(tabsContentStyle, className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
