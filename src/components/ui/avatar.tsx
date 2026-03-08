"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { css, cx } from "styled-system/css";

const avatarRoot = css({
  position: "relative",
  display: "flex",
  width: "2rem",
  height: "2rem",
  flexShrink: 0,
  overflow: "hidden",
  borderRadius: "9999px",
});

const avatarImage = css({
  aspectRatio: "1/1",
  width: "100%",
  height: "100%",
});

const avatarFallback = css({
  backgroundColor: "var(--muted)",
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "9999px",
});

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cx(avatarRoot, className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cx(avatarImage, className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cx(avatarFallback, className)}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
