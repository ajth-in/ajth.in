import Link from "next/link";
import BrandLabel from "./BrandLabel";
import { buttonVariants } from "~/components/ui/button";
import ThemeSwitch from "~/components/ThemeSwitch";

const Header = () => {
  const links = [
    { path: "/blog", name: "Blogs" },
    { path: "/Works", name: "Projects" },
    { path: "/about", name: "About me" },
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
