"use client";

import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";
import Title from "./titele";
import { css } from "styled-system/css";

export const publications = [
  {
    title:
      "EBPF-Based Runtime Detection of Semantic DDoS Attacks in Linux Containers",
    authors: ["B. Niranjan", "P. M. Ajith Kumar", "K. Merin Shaju", "K. Dinoy Raj"],
    venue: "IEEE Xplore",
    year: 2025,
    href: "https://ieeexplore.ieee.org/document/11179973",
    abstract:
      "Modern Distributed Denial-of-Service (DDoS) attacks increasingly target the application layer to exhaust CPU resources, particularly in containerized environments. Existing approaches such as CODA rely on CPU burst time between accept() and close() system calls and fail when connections persist without closure. This work proposes CODAX, a container-aware detection method using extended Berkeley Packet Filter (eBPF) probes to monitor CPU usage from the moment a connection is accepted. By tracking long-running malicious connections via kernel-level instrumentation, CODAX enables early attack detection. Experimental evaluation shows faster detection, high attack detection accuracy (ADR: 0.92), low false positive rate (FPR: 0.02), and a 94.2% reduction in detection latency compared to CODA, with efficient CPU utilization and strong scalability.",
  },
];

export function PublicationsSection() {
  if (!publications.length) return null;

  return (
    <section>
      <Title>Publications</Title>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        })}
      >
        {publications.map((pub, index) => (
          <Link
            key={index}
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "1rem",
              padding: "0.75rem",
              borderRadius: "lg",
              transition: "all 0.2s",
              textDecoration: "none",
              _hover: {
                backgroundColor: "surface.glass.subtle",
                "& .pub-link-icon": {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            })}
          >
            {/* Left icon column */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                paddingTop: "0.125rem",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "md",
                  backgroundColor: { base: "rgba(59, 130, 246, 0.1)", _dark: "rgba(96, 165, 250, 0.12)" },
                  color: { base: "rgb(59 130 246)", _dark: "rgb(96 165 250)" },
                  flexShrink: 0,
                })}
              >
                <FileText size={14} />
              </div>

            </div>

            {/* Content */}
            <div className={css({ display: "flex", flexDirection: "column", gap: "0.375rem" })}>
              <div
                className={css({
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                })}
              >
                <p
                  className={css({
                    textStyle: "body.sm",
                    fontWeight: "600",
                    lineHeight: "1.4",
                    color: { base: "neutral.900", _dark: "neutral.100" },
                  })}
                >
                  {pub.title}
                </p>
                <ExternalLink
                  size={12}
                  className={`pub-link-icon ${css({
                    flexShrink: 0,
                    marginTop: "0.25rem",
                    color: "fg.subtle",
                    opacity: 0,
                    transform: "translateX(-4px)",
                    transition: "all 0.2s",
                  })}`}
                />
              </div>

              {/* Authors — highlight "you" */}
              <p
                className={css({
                  textStyle: "body.xs",
                  lineHeight: "1.5",
                  color: "fg.muted",
                })}
              >
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {i > 0 && (
                      <span className={css({ color: "fg.subtle" })}>{"; "}</span>
                    )}
                    <span
                      className={
                        author.includes("Ajith Kumar")
                          ? css({ fontWeight: "600", color: { base: "neutral.800", _dark: "neutral.200" } })
                          : undefined
                      }
                    >
                      {author}
                    </span>
                  </span>
                ))}
              </p>

              {/* Venue + year */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                })}
              >
                <span
                  className={css({
                    textStyle: "body.xs",
                    fontWeight: "600",
                    color: { base: "rgb(59 130 246)", _dark: "rgb(96 165 250)" },
                  })}
                >
                  {pub.venue}
                </span>
                <span className={css({ color: "fg.subtle", fontSize: "10px" })}>•</span>
                <span
                  className={css({
                    textStyle: "mono",
                    fontSize: "11px",
                    color: "fg.subtle",
                  })}
                >
                  {pub.year}
                </span>
              </div>

              <p
                className={css({
                  textStyle: "body.xs",
                  lineHeight: "1.6",
                  color: "fg.muted",
                  lineClamp: 2,
                })}
              >
                {pub.abstract}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
