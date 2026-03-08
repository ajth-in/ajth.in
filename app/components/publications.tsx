"use client";

import Link from "next/link";
import Title from "./titele";
import { css } from "styled-system/css";

export const publications = [
  {
    title:
      "EBPF-Based Runtime Detection of Semantic DDoS Attacks in Linux Containers",
    authors: "B. Niranjan; P. M. Ajith Kumar; K. Merin Shaju; K. Dinoy Raj",
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
    <section className={css({ maxWidth: "36rem", paddingTop: "2rem", paddingBottom: "2rem" })}>
      <Title>Publications</Title>

      <ul className={css({ display: "flex", flexDirection: "column", gap: "1rem" })}>
        {publications.map((pub, index) => (
          <li
            key={index}
            className={css({
              borderRadius: "xl",
              border: "1px solid",
              borderColor: "surface.card.border",
              backgroundColor: "surface.card",
              padding: "1rem",
            })}
          >
            <Link
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className={css({ display: "block", "& > *+*": { marginTop: "0.5rem" } })}
            >
              <p
                className={css({
                  textStyle: "heading.card",
                  fontSize: "1rem",
                  color: { base: "neutral.900", _dark: "neutral.50" },
                })}
              >
                {pub.title}
              </p>

              <p
                className={css({
                  textStyle: "body.xs",
                  color: "fg.muted",
                })}
              >
                {pub.authors}
              </p>

              <p
                className={css({
                  textStyle: "body.xs",
                  color: "fg.subtle",
                })}
              >
                {pub.venue} · {pub.year}
              </p>

              <p
                className={css({
                  paddingTop: "0.5rem",
                  textStyle: "body.default",
                  color: { base: "neutral.700", _dark: "neutral.300" },
                  lineClamp: 3,
                })}
              >
                {pub.abstract}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
