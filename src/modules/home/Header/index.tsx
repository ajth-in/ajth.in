import Link from "next/link";
import BrandLabel from "./BrandLabel";
import { buttonVariants } from "~/components/ui/button";
import ThemeSwitch from "~/components/ThemeSwitch";
import { ABOUT, BLOGS, WORKS } from "~/constants/routes";

const Header = () => {
  const links = [
    { path: BLOGS, name: "Blogs" },
    { path: WORKS, name: "Projects" },
    { path: ABOUT, name: "About me" },
  ];
  return (
    <header className="py-4 flex justify-between">
      <BrandLabel />
      <div className="flex gap-1">
        {links.map((link) => (
          <Link
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
