import { buttonVariants } from "@/components/ui/button";
import { AtSign, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  const links = [
    {
      path: "https://www.linkedin.com/in/ajith-kumar-p-m/",
      title: "Ajith Kumar P M Linkedin profile",
      icon: Linkedin,
    },
    {
      path: "mailto:ajithpmuralidharan01@gmail.com",
      title: "Ajith Kumar P M email",
      icon: AtSign,
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <a
          key={link.title}
          href={link.path}
          aria-label={link.title}
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          <link.icon className="text-gray-300 hover:text-white transition-all  p-1" />
        </a>
      ))}
    </div>
  );
};
