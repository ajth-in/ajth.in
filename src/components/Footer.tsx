import { Instagram, Linkedin, Twitter } from "lucide-react";
import { INSTAGRAM, LINKEDIN, X } from "@/constants/routes";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="py-4 mt-8   text-center border-t-1 border-border">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ajth.in All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2">
          <a
            href={LINKEDIN}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Linkedin size={20} />
          </a>
          <a
            href={X}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Twitter size={20} />
          </a>
          <a
            href={INSTAGRAM}
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
