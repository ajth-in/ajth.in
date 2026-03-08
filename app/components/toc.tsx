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
            textStyle: "body.xs",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: { base: "neutral.700", _dark: "neutral.500" },
          })}
        >
          On this page
        </h3>

        <div
          className={css({
            position: "relative",
            borderLeft: "1px solid",
            borderColor: "neutral.800",
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
                        backgroundColor: { base: "neutral.200", _dark: "white" },
                        transition: "all 0.3s",
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
                            color: { base: "black", _dark: "white" },
                            fontWeight: "500",
                          })
                        : css({
                            color: { base: "neutral.700", _dark: "neutral.400" },
                            lineClamp: 2,
                            _hover: {
                              color: { base: "neutral.800", _dark: "neutral.200" },
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
