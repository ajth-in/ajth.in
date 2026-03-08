"use client";

import { useEffect, useState } from "react";
import { css, cx } from "styled-system/css";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "0px 0px -80% 0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);
  if (!items.length) return;

  return (
    <nav
      className={css({
        display: "none",
        maxWidth: "240px",
        lg: { display: "block" },
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        })}
      >
        <h3
          className={css({
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgb(64 64 64)",
            _dark: { color: "rgb(115 115 115)" },
          })}
        >
          On this page
        </h3>

        <div
          className={css({
            position: "relative",
            borderLeft: "1px solid rgb(38 38 38)",
          })}
        >
          <ul
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            })}
          >
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li
                  key={item.id}
                  style={{ paddingLeft: (item.level - 1) * 16 }}
                  className={css({ position: "relative" })}
                >
                  {isActive && (
                    <div
                      className={css({
                        position: "absolute",
                        left: "-1px",
                        top: 0,
                        height: "100%",
                        width: "2px",
                        backgroundColor: "rgb(229 229 229)",
                        transition: "all 0.3s",
                        _dark: { backgroundColor: "white" },
                      })}
                    />
                  )}

                  <a
                    href={`#${item.id}`}
                    className={cx(
                      css({
                        display: "block",
                        fontSize: "13px",
                        lineHeight: "1.625",
                        transition: "color 0.2s",
                        paddingLeft: "0.5rem",
                      }),
                      isActive
                        ? css({
                            color: "black",
                            fontWeight: "500",
                            _dark: { color: "white" },
                          })
                        : css({
                            color: "rgb(64 64 64)",
                            lineClamp: 2,
                            _hover: { color: "rgb(38 38 38)" },
                            _dark: {
                              color: "rgb(163 163 163)",
                              _hover: { color: "rgb(229 229 229)" },
                            },
                          })
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
