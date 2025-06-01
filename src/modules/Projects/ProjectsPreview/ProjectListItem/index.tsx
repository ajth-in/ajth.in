"use client";
import { readFragment, type FragmentOf } from "gql.tada";
import { CornerRightUp, GitFork, Github, Star } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { RepositoryFragment } from "~/operations/queries/get-pinned-projects";
import RepositoryLangs from "../RepositoryLangs";

type ProjectListItemProps = {
  project: FragmentOf<typeof RepositoryFragment>;
};
const ProjectListItem = (props: ProjectListItemProps) => {
  const repository = readFragment(RepositoryFragment, props.project);
  const languages =
    repository.languages?.nodes
      ?.map((item) => item?.name)
      .filter((item): item is string => !!item) ?? [];

  return (
    <div
      className={
        "group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm transition-all duration-300  hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-4">
        <div className="flex sm:items-center items-end sm:flex-row flex-col justify-between gap-4 ">
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
              <RepositoryLangs
                owner={repository.owner.resourcePath as string}
                repositories={languages}
                repository={repository.name}
              />

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
          <div className="flex">
            <Link
              href={repository?.url ?? "#"}
              target="_blank"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
            <div className="flex-shrink-0  ">
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
    </div>
  );
};
export default ProjectListItem;
