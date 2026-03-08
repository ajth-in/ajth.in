import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { css } from "styled-system/css";

export function Banner() {
  return (
    <header
      className={css({
        position: "relative",
        display: "flex",
        maxWidth: "fit-content",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "xl",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: "0.5rem",
        paddingRight: "1.5rem",
        transition: "all 0.2s",
        _hover: {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
        _dark: {
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          _hover: {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        },
      })}
    >
      <Avatar
        className={css({
          height: "3rem",
          width: "3rem",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        })}
      >
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62293152?v=4"
          alt="Aji"
        />
        <AvatarFallback
          className={css({
            backgroundColor: "rgb(38 38 38)",
            fontSize: "0.75rem",
          })}
        >
          AJ
        </AvatarFallback>
      </Avatar>

      <div
        className={css({ display: "flex", flexDirection: "column" })}
      >
        <h1
          className={css({
            fontSize: "1.125rem",
            fontWeight: "500",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            color: "black",
            _dark: { color: "rgba(255, 255, 255, 0.9)" },
          })}
        >
          Ajith Kumar P M{" "}
          <span
            className={css({
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
              color: "rgba(0, 0, 0, 0.3)",
              fontSize: "1.125rem",
              _dark: { color: "rgba(255, 255, 255, 0.3)" },
            })}
          >
            •
          </span>
          <span
            className={css({
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.875rem",
              fontWeight: "700",
              color: "rgb(74 222 128)",
            })}
          >
            Dev
          </span>
        </h1>
        <p
          className={css({
            marginTop: "0.25rem",
            fontSize: "0.875rem",
            lineHeight: 1,
            color: "rgb(82 82 82)",
            _dark: { color: "rgb(115 115 115)" },
          })}
        >
          Product Engineer{" "}
          <Link
            target="_blank"
            className={css({
              color: "rgb(115 115 115)",
              fontWeight: "700",
              _hover: { color: "white" },
              _dark: { color: "rgb(163 163 163)" },
            })}
            href="https://ust.com"
          >
            @UST
          </Link>
        </p>
      </div>
    </header>
  );
}
