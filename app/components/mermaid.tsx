"use client";
import mermaid from "mermaid";
import { useEffect, useRef, useId } from "react";
import WithMermaidCopyButton from "./with-mermaid-copy";
import { useTheme } from "./theme-provider";
import { css } from "styled-system/css";

const lightTheme = {
  primaryColor: "#67e8f9",
  primaryTextColor: "#020617",
  primaryBorderColor: "#0891b2",
  secondaryColor: "#e5e7eb",
  secondaryTextColor: "#020617",
  lineColor: "#334155",
  textColor: "#020617",
  fontFamily: "ui-sans-serif, system-ui",
  fontSize: "14px",
};

const darkTheme = {
  primaryColor: "#0e7490",
  primaryTextColor: "#f8fafc",
  primaryBorderColor: "#155e75",
  secondaryColor: "#1e293b",
  secondaryTextColor: "#f8fafc",
  lineColor: "#94a3b8",
  textColor: "#f8fafc",
  fontFamily: "ui-sans-serif, system-ui",
  fontSize: "14px",
};

type MermaidProps = {
  chart: string;
};

export const MermaidDiagram = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const { theme } = useTheme();

  useEffect(() => {
    // Re-initialize mermaid each time the theme changes
    mermaid.initialize({
      startOnLoad: false,
      look: "handDrawn",
      handDrawnSeed: 20000,
      theme: "base",
      themeVariables: theme === "dark" ? darkTheme : lightTheme,
    });

    if (!ref.current) return;

    ref.current.innerHTML = "";

    mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
      if (!ref.current) return;
      ref.current.innerHTML = svg;
    });
  }, [chart, id, theme]);

  return (
    <WithMermaidCopyButton ref={ref}>
      <div
        ref={ref}
        className={css({
          display: "flex",
          justifyContent: "center",
          width: "100%",
        })}
      />
    </WithMermaidCopyButton>
  );
};
