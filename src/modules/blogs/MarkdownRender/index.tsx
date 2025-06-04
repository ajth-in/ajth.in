import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { type CSSProperties } from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert  mt-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground border-b border-border pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground border-b border-border pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold mt-4 mb-2 text-foreground">
              {children}
            </h4>
          ),

          // Paragraphs
          p: ({ children }) => (
            <span className="mb-4 leading-7 text-foreground">{children}</span>
          ),

          // Links
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-brand hover:text-brand/80 underline underline-offset-4 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
          ),
          li: ({ children }) => <li className="text-foreground">{children}</li>,

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-brand bg-brand/5 pl-4 py-2 my-4 italic">
              {children}
            </blockquote>
          ),

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: ({ inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec((className as string) || "");
            return !inline && match ? (
              <div className="my-4 rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  style={theme as CSSProperties}
                  language={match[1]}
                  PreTag="div"
                  wrapLongLines
                  className="invert dark:invert-0 !text-card-foreground"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code
                className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Images
          img: ({ src, alt }) => (
            <div className="my-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="w-full rounded-lg shadow-md"
              />
              {alt && (
                <p className="text-center text-sm text-muted-foreground mt-2 italic">
                  {alt}
                </p>
              )}
            </div>
          ),

          // Tables
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2">{children}</td>
          ),

          // Horizontal rule
          hr: () => <hr className="my-8 border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
