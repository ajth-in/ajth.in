"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Title from "./titele";
import { css } from "styled-system/css";

type Tool = {
  name: string;
  description: string;
  logo: string;
  url: string;
  pingUrl: string;
};

export const tools: Tool[] = [
  {
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON data instantly.",
    logo: "{ }",
    url: "https://json-formatter.ajth.in",
    pingUrl: "https://json-formatter.ajth.in/ping",
  },
];

function useToolStatus(pingUrl: string) {
  const [status, setStatus] = useState<"checking" | "online" | "offline">(
    "checking"
  );

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    fetch(pingUrl, {
      method: "GET",
      mode: "no-cors",
      signal: controller.signal,
    })
      .then(() => setStatus("online"))
      .catch(() => setStatus("offline"))
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [pingUrl]);

  return status;
}

function StatusDot({ pingUrl }: { pingUrl: string }) {
  const status = useToolStatus(pingUrl);

  return (
    <span
      className={css({
        display: "inline-flex",
        alignItems: "center",
        gap: "0.375rem",
        textStyle: "body.xs",
        color: "fg.subtle",
      })}
    >
      <span
        className={css({
          width: "6px",
          height: "6px",
          borderRadius: "9999px",
          flexShrink: 0,
          ...(status === "online"
            ? { backgroundColor: "accent.green" }
            : status === "offline"
              ? { backgroundColor: "accent.red" }
              : { backgroundColor: "neutral.400" }),
        })}
      />
      {status === "checking" ? "checking…" : status}
    </span>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        borderRadius: "xl",
        border: "1px solid",
        borderColor: "surface.card.border",
        backgroundColor: "surface.card",
        padding: "1rem",
        transition: "all 0.2s",
        _hover: {
          backgroundColor: "surface.glass.hover",
          transform: "translateY(-1px)",
        },
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        })}
      >
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "lg",
            backgroundColor: "surface.glass",
            border: "1px solid",
            borderColor: "surface.glass.border",
            fontFamily: "mono",
            fontSize: "0.875rem",
            fontWeight: "700",
            color: "accent.green",
            flexShrink: 0,
          })}
        >
          {tool.logo}
        </div>

        <StatusDot pingUrl={tool.pingUrl} />
      </div>

      <div>
        <p
          className={css({
            textStyle: "body.sm",
            fontWeight: "600",
            color: { base: "neutral.900", _dark: "neutral.50" },
          })}
        >
          {tool.name}
        </p>
        <p
          className={css({
            marginTop: "0.25rem",
            textStyle: "body.xs",
            color: "fg.muted",
            lineClamp: 2,
          })}
        >
          {tool.description}
        </p>
      </div>
    </Link>
  );
}

export function ToolsSection() {
  if (!tools.length) return null;

  return (
    <section
      className={css({
        maxWidth: "36rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      })}
    >
      <Title>Tools</Title>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0.75rem",
          md: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        })}
      >
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}
