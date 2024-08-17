"use client";
import React from "react";
import { projects } from "./posts";
import { Badge } from "../../@/components/ui/badge";
import { Circle } from "lucide-react";
import Link from "next/link";

const Project = (project: (typeof projects)[number]) => {
  return (
    <Link
      href={project.link}
      className="flex flex-row gap-6 w-full items-start"
    >
      <Circle className="w-4 h-4 mt-2 text-primary shrink-0" />
      <div className="flex flex-col gap-1">
        <p>{project.title}</p>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        <div className={"flex gap-2 my-2"}>
          {project.badges.map((badge) => (
            <Badge key={badge} variant={"outline"}>
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;