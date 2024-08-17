import { Github } from "lucide-react";
import Link from "next/link";
import { badgeVariants } from "../../@/components/ui/badge";
import Project from "./project";

export const projects = [
  {
    title: "CODAX",
    description:
      "runtime detection and prevention of semantic DOS attacks in linux containers",
    badges: ["linux", "ebpf", "c"],
    link: "https://github.com/Ziton-live/CODAX",
  },
  {
    title: "Ziton ",
    description: "Python django sdk for the ziton observability tool",
    badges: ["python", "django"],
    link: "https://github.com/Ziton-live/ziton-monitor",
  },
  {
    title: "Blood care ",
    description: "An app to connect blood donors",
    badges: ["python", "django"],
    link: "https://github.com/ajth-k/bloodcare",
  },
  {
    title: "Talk form",
    description: "component to generate chat like form UI.",
    badges: ["Rollup", "js", "react"],
    link: "https://www.npmjs.com/package/talk-form",
  },
];
export const Projects = () => {
  return (
    <div className="flex gap-4 flex-col items-start">
      <div>
        <Link
          href={"https://github.com/ajth-k"}
          className={badgeVariants({ variant: "outline" })}
        >
          Checkout my <Github className={"mx-1 w-[15px]"} />
        </Link>
      </div>
      <div className="flex gap-2 flex-col">
        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
          Projects
        </h2>
        <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
          Things I've made and done
        </p>
      </div>
      <div className="flex gap-10 pt-12 flex-col w-full">
        <div className="grid sm:grid-cols-2 items-start lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};