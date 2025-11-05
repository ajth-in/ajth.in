import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[13px] px-3 py-1.5 \
   transition-none disabled:pointer-events-none disabled:opacity-50 \
   border border-gray-600 bg-gray-200 text-gray-900 \
   shadow-[inset_-1px_-1px_0_#000,inset_1px_1px_0_#fff,inset_-2px_-2px_#777,inset_2px_2px_#ddd] \
   active:shadow-[inset_1px_1px_0_#000,inset_-1px_-1px_0_#fff,inset_2px_2px_#777,inset_-2px_-2px_#ddd] \
   active:translate-x-[1px] active:translate-y-[1px]",
  {
    variants: {
      variant: {
        default: "bg-gray-200 ",
        destructive:
          "bg-red-200 text-red-900 border-red-700 shadow-[inset_-1px_-1px_0_#300,inset_1px_1px_0_#fff,inset_-2px_-2px_#a44,inset_2px_2px_#fcc]",
        outline: "bg-white  border border-black shadow-none hover:bg-gray-100",
        secondary:
          "bg-blue-200  border-blue-700 shadow-[inset_-1px_-1px_0_#003,inset_1px_1px_0_#fff,inset_-2px_-2px_#559,inset_2px_2px_#ccf]",
        ghost: "bg-transparent border-none shadow-none hover:bg-gray-200",
        link: "bg-transparent text-primary border-none shadow-none  underline  ",
      },
      size: {
        default: "h-8 min-w-[64px]",
        sm: "h-7 px-2 text-[18px]",
        lg: "h-10 px-4 text-[28px]",
        icon: "size-8 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    // @ts-ignore
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
