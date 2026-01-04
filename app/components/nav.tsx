import { Home } from "lucide-react";
import Link from "next/link";

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
    <aside className="-ml-[8px] mb-6 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center space-x-0 pr-10">
            {Object.entries(navItems).map(([path, item]) => {
              return (
                <Link
                  aria-label={`Go to ${item.name} page`}
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 hover:underline"
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
