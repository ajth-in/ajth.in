import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, cx } from "styled-system/css";
import type { RecipeVariantProps } from "styled-system/css";

const buttonVariants = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    whiteSpace: "nowrap",
    borderRadius: "md",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s",
    outline: "none",
    flexShrink: 0,
    cursor: "pointer",
    _disabled: {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
  variants: {
    variant: {
      default: {
        backgroundColor: "var(--primary)",
        color: "var(--primary-foreground)",
        _hover: {
          opacity: 0.9,
        },
      },
      destructive: {
        backgroundColor: "var(--destructive)",
        color: "white",
        _hover: {
          opacity: 0.9,
        },
      },
      outline: {
        border: "1px solid var(--border)",
        backgroundColor: "var(--background)",
        _hover: {
          backgroundColor: "var(--accent)",
          color: "var(--accent-foreground)",
        },
      },
      secondary: {
        backgroundColor: "var(--secondary)",
        color: "var(--secondary-foreground)",
        _hover: {
          opacity: 0.8,
        },
      },
      ghost: {
        _hover: {
          backgroundColor: "var(--accent)",
          color: "var(--accent-foreground)",
        },
      },
      link: {
        color: "var(--primary)",
        textUnderlineOffset: "4px",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
    size: {
      default: {
        height: "2.25rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      },
      sm: {
        height: "2rem",
        borderRadius: "md",
        gap: "0.375rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
      },
      lg: {
        height: "2.5rem",
        borderRadius: "md",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      },
      icon: {
        width: "2.25rem",
        height: "2.25rem",
      },
      "icon-sm": {
        width: "2rem",
        height: "2rem",
      },
      "icon-lg": {
        width: "2.5rem",
        height: "2.5rem",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonVariantProps = RecipeVariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  // oxlint-disable-next-line no-unused-vars
  ref,
  ...props
}: React.ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cx(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
