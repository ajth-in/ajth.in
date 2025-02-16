import { Instagram, Linkedin, Twitter } from "lucide-react";
import { INSTAGRAM, LINKEDIN, X } from "~/constants/routes";

export default function Footer() {
  return (
    <footer className="py-8 my-4   text-center border-t-1">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ajth.in All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2">
          <a href={LINKEDIN} className="text-gray-400 hover:text-white">
            <Linkedin size={20} />
          </a>
          <a href={X} className="text-gray-400 hover:text-white">
            <Twitter size={20} />
          </a>
          <a href={INSTAGRAM} className="text-gray-400 hover:text-white">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
