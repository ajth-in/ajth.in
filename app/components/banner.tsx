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
        border: "1px solid",
        borderColor: "surface.glass.border",
        backgroundColor: "surface.glass",
        padding: "0.5rem",
        paddingRight: "1.5rem",
        transition: "all 0.2s",
        _hover: {
          backgroundColor: "surface.glass.hover",
        },
      })}
    >
      <Avatar
        className={css({
          height: "3rem",
          width: "3rem",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "sm",
        })}
      >
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62293152?v=4"
          alt="Aji"
        />
        <AvatarFallback
          className={css({
            backgroundColor: "neutral.800",
            fontSize: "0.75rem",
          })}
        >
          AJ
        </AvatarFallback>
      </Avatar>

      <div className={css({ display: "flex", flexDirection: "column" })}>
        <h1
          className={css({
            textStyle: "heading.card",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            color: "fg",
          })}
        >
          Ajith Kumar P M{" "}
          <span
            className={css({
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
              color: { base: "rgba(0, 0, 0, 0.3)", _dark: "rgba(255, 255, 255, 0.3)" },
              fontSize: "1.125rem",
            })}
          >
            •
          </span>
          <span
            className={css({
              fontFamily: "mono",
              fontSize: "0.875rem",
              fontWeight: "700",
              color: "accent.green",
            })}
          >
            Dev
          </span>
        </h1>
        <p
          className={css({
            marginTop: "0.25rem",
            textStyle: "body.sm",
            lineHeight: 1,
            color: { base: "neutral.600", _dark: "neutral.500" },
          })}
        >
          Product Engineer{" "}
          <Link
            target="_blank"
            className={css({
              color: { base: "neutral.500", _dark: "neutral.400" },
              fontWeight: "700",
              _hover: { color: "fg.inverted" },
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
