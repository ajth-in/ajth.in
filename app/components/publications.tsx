"use client";

import Link from "next/link";
import Title from "./titele";

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
    <section className="max-w-xl py-8">
      <Title>Publications</Title>

      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li
            key={index}
            className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700/20 dark:bg-neutral-800/20"
          >
            <Link
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2"
            >
              <p className="text-md font-semibold leading-snug text-neutral-900 dark:text-neutral-100">
                {pub.title}
              </p>

              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {pub.authors}
              </p>

              <p className="text-xs text-neutral-500 dark:text-neutral-500">
                {pub.venue} · {pub.year}
              </p>

              <p className="pt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-3">
                {pub.abstract}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
