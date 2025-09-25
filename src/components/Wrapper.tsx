"use client";
import { useTheme } from "next-themes";
import type { PropsWithChildren } from "react";
import { getCldImageUrl } from "next-cloudinary";
import { useEffect, useRef } from "react";

export default function Wrapper({ children }: PropsWithChildren) {
  return <main className="bg-background">{children}</main>;
}
