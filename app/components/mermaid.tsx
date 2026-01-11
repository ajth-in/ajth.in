"use client";
import mermaid from "mermaid";
import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const initMermaid = (mode: "light" | "dark") => {
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
};

type MermaidProps = {
  chart: string;
};

export const MermaidDiagram = ({ chart }: MermaidProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    initMermaid(isDark ? "dark" : "light");

    if (!ref.current) return;
    ref.current.innerHTML = chart;
    mermaid.run({ nodes: [ref.current] });
  }, [chart]);

  const downloadAsImage = () => {
    if (!ref.current) return;

    const svg = ref.current.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);

    const encoded = encodeURIComponent(svgStr);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encoded}`;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (!blob) return;

        const a = document.createElement("a");
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = "diagram.png";
        a.click();
        URL.revokeObjectURL(url);
      });
    };

    img.src = dataUrl;
  };

  return (
    <div>
      <div className="relative ">
        <Button
          variant={"ghost"}
          className="cursor-pointer absolute right-0"
          onClick={downloadAsImage}
          aria-label="Download diagram"
        >
          <Download size={16} />
        </Button>
        <div className="flex justify-center w-full" ref={ref} />
      </div>
    </div>
  );
};
