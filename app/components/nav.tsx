"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight flex items-center w-full justify-between ">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex flex-row space-x-0 p-2 gap-2 ">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <Link href={path} passHref legacyBehavior key={name}>
                      <NavigationMenuLink
                        className={buttonVariants({ variant: "link" })}
                      >
                        {name}
                      </NavigationMenuLink>
                    </Link>
                  );
                })}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
      <Button
        variant={"outline"}
        className="text-xs cursor-pointer"
        onClick={() => {
          alert("Hello");
        }}
      >
        Sign in
      </Button>
    </aside>
  );
}