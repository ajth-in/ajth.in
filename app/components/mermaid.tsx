"use client";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  look: "handDrawn",
  handDrawnSeed: 20000,

  themeVariables: {
    primaryColor: "#0e7490",
    primaryTextColor: "#f8fafc",
    primaryBorderColor: "#155e75",

    secondaryColor: "#1e293b",
    secondaryTextColor: "#f8fafc",

    lineColor: "#94a3b8",
    textColor: "#f8fafc",

    fontFamily: "ui-sans-serif, system-ui",
    fontSize: "14px",

    nodeBorderRadius: 6,
    spacingFactor: 1.3,
  },
});

type MermaidProps = {
  chart: string;
};

export const MermaidDiagram = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = chart;
    mermaid.run({
      nodes: [ref.current],
    });
  }, [chart]);

  return <div ref={ref} />;
};
