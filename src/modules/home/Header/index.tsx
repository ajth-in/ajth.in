import Link from "next/link";
import BrandLabel from "./BrandLabel";
import { buttonVariants } from "~/components/ui/button";
import ThemeSwitch from "~/components/ThemeSwitch";
import { BLOGS, WORKS } from "~/constants/routes";
import LanguageSwitcher from "~/components/LanguageSwitcher";
import { cx } from "class-variance-authority";

type HeaderProps = {
  className?: string;
};
const Header = (props: HeaderProps) => {
  const { className } = props;
  const links = [
    { path: BLOGS, name: "Blogs" },
    { path: WORKS, name: "Projects" },
  ];
  return (
    <header
      className={cx(
        "py-2 flex justify-between border-b-1   mx-auto",
        className,
      )}
    >
      <BrandLabel />
      <div className="flex gap-1">
        {links.map((link) => (
          <Link
            key={link.name}
            className={buttonVariants({ variant: "link" })}
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
    </header>
  );
};
export default Header;
