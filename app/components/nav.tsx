import { Home } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";

const navItems = {
  "/": {
    name: "home",
    icon: <Home size={16} />,
  },
  "/blog": {
    icon: null,
    name: "Blogs",
  },
};

export function Navbar() {
  return (
    <aside
      className={css({
        marginLeft: "-8px",
        marginBottom: "1.5rem",
        letterSpacing: "-0.025em",
      })}
    >
      <div className={css({ lg: { position: "sticky", top: "5rem" } })}>
        <nav
          className={css({
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            position: "relative",
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
            md: { overflow: "auto", position: "relative" },
          })}
          id="nav"
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 0,
              paddingRight: "2.5rem",
            })}
          >
            {Object.entries(navItems).map(([path, item]) => {
              return (
                <Link
                  aria-label={`Go to ${item.name} page`}
                  key={path}
                  href={path}
                  className={css({
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    margin: "0.25rem",
                    _hover: {
                      color: { base: "neutral.800", _dark: "neutral.200" },
                      textDecoration: "underline",
                    },
                  })}
                >
                  {item.icon ?? item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
