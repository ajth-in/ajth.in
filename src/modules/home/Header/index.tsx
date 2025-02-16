import Link from "next/link";
import BrandLabel from "./BrandLabel";
import { buttonVariants } from "~/components/ui/button";
import ThemeSwitch from "~/components/ThemeSwitch";
import { BLOGS, WORKS } from "~/constants/routes";

const Header = () => {
  const links = [
    { path: BLOGS, name: "Blogs" },
    { path: WORKS, name: "Projects" },
  ];
  return (
    <header className="py-2 flex justify-between border-b-1">
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
      <ThemeSwitch />
    </header>
  );
};
export default Header;
