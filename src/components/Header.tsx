import Link from "next/link";

import { cx } from "class-variance-authority";
import { BLOGS, WORKS } from "@/constants/routes";
import { buttonVariants } from "./ui/button";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitcher from "./LanguageSwitch";
import BrandLabel from "./Brand";

type HeaderProps = {
  className?: string;
};
const Header = (props: HeaderProps) => {
  const { className } = props;
  const links = [
    { path: BLOGS, name: "Blogs" },
    { path: WORKS, name: "Projects" },
  ] as const;
  return (
    <header className={cx(" border-b-1 backdrop-blur-2xl", className)}>
      <div className={"py-4 flex justify-between  max-w-3xl mx-auto"}>
        <BrandLabel />
        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.name}
              className={cx(
                buttonVariants({ variant: "link", size: "sm" }),
                "font-monosans text-xl",
              )}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-1">
          <LanguageSwitcher />

          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};
export default Header;
