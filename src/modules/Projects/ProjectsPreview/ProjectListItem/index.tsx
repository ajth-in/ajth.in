"use client";
import { readFragment, type FragmentOf } from "gql.tada";
import { CornerRightUp, GitFork, Github, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { RepositoryFragment } from "~/operations/queries/get-pinned-projects";
import { languageIconStyles } from "../utils";

type ProjectListItemProps = {
  project: FragmentOf<typeof RepositoryFragment>;
};
const ProjectListItem = (props: ProjectListItemProps) => {
  const repository = readFragment(RepositoryFragment, props.project);
  return (
    <div
      className={
        "group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm transition-all duration-300  hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-4">
        <div className="flex items-center justify-between gap-4 ">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Github className="h-4 w-4 text-brand flex-shrink-0" />
              <h3 className="text-lg font-semibold text-foreground truncate">
                {repository.name}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
              {repository.description}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="GitHub top language"
                  src={`https://img.shields.io/github/languages/top/ajth-in/${repository.name}`}
                />
                {repository.languages?.nodes
                  ?.slice(0, 4)
                  .filter((item) => !!item)
                  .map((lang) => (
                    <Badge
                      key={lang?.name}
                      variant="secondary"
                      className="flex items-center gap-1 px-2 py-0.5 text-xs bg-secondary/30 border-0 hover:bg-secondary/50 transition-colors"
                    >
                      <span
                        aria-hidden
                        className={
                          languageIconStyles[lang.name] ??
                          "w-2.5 h-2.5 rounded-full bg-muted-foreground/50"
                        }
                      />

                      {lang?.name}
                    </Badge>
                  ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" />
                  <span>{repository.stargazerCount?.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" />
                  <span>{repository.forkCount?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={repository?.url ?? "#"}
            target="_blank"
            className={buttonVariants({ size: "sm", variant: "ghost" })}
            rel="noopener noreferrer"
          >
            <Github />
          </Link>
          <div className="flex-shrink-0">
            <Link
              href={repository?.homepageUrl ?? "#"}
              target="_blank"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
              rel="noopener noreferrer"
            >
              <CornerRightUp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectListItem;
