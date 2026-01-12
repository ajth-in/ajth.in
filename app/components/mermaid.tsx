"use client";
import mermaid from "mermaid";
import { useEffect, useRef, useId } from "react";
import WithMermaidCopyButton from "./with-mermaid-copy";

let mermaidInitialized = false;

const initMermaidOnce = (mode: "light" | "dark") => {
  if (mermaidInitialized) return;

  mermaid.initialize({
    startOnLoad: false,
    look: "handDrawn",
    handDrawnSeed: 20000,
    theme: "base",
    themeVariables:
      mode === "dark"
        ? {
            primaryColor: "#0e7490",
            primaryTextColor: "#f8fafc",
            primaryBorderColor: "#155e75",
            secondaryColor: "#1e293b",
            secondaryTextColor: "#f8fafc",
            lineColor: "#94a3b8",
            textColor: "#f8fafc",
            fontFamily: "ui-sans-serif, system-ui",
            fontSize: "14px",
          }
        : {
            primaryColor: "#67e8f9",
            primaryTextColor: "#020617",
            primaryBorderColor: "#0891b2",
            secondaryColor: "#e5e7eb",
            secondaryTextColor: "#020617",
            lineColor: "#334155",
            textColor: "#020617",
            fontFamily: "ui-sans-serif, system-ui",
            fontSize: "14px",
          },
  });

  mermaidInitialized = true;
};

type MermaidProps = {
  chart: string;
};

export const MermaidDiagram = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    initMermaidOnce(isDark ? "dark" : "light");

    if (!ref.current) return;

    ref.current.innerHTML = "";

    mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
      if (!ref.current) return;
      ref.current.innerHTML = svg;
    });
  }, [chart, id]);

  return (
    <WithMermaidCopyButton ref={ref}>
      <div ref={ref} className="flex justify-center w-full" />
    </WithMermaidCopyButton>
  );
};
