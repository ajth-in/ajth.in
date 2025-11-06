"use client";
import { useTheme } from "next-themes";
import { Streamdown } from "streamdown";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { theme } = useTheme(); // get the current theme

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert mt-12">
      <Streamdown
        shikiTheme={
          theme === "light"
            ? ["catppuccin-latte", "catppuccin-latte"]
            : ["ayu-dark", "ayu-dark"]
        }
        components={{
          h1: ({ children }) => (
            <h1 className="font-monosans text-4xl text-primary mt-8 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-monosans text-3xl text-primary mt-6 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-monosans text-2xl text-primary mt-4 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <span className="text-base leading-relaxed text-primary mb-4">
              {children}
            </span>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4">{children}</ul>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
        }}
      >
        {content}
      </Streamdown>
    </div>
  );
}
