import { Badge } from "~/components/ui/badge";
import { languageIconStyles } from "../utils";

type RepositoryLangsProps = {
  repositories: string[];
  repository: string;
  owner: string;
};
const RepositoryLangs = (props: RepositoryLangsProps) => {
  const { repositories, repository, owner } = props;

  return (
    <div className="flex flex-wrap gap-1.5 min-w-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="GitHub top language"
        src={`https://img.shields.io/github/languages/top${owner}/${repository}`}
      />
      {repositories.map((lang) => (
        <Badge
          key={lang}
          variant="secondary"
          className="flex items-center gap-1 px-2 py-0.5 text-xs bg-secondary/30 border-0 hover:bg-secondary/50 transition-colors"
        >
          <span
            aria-hidden
            className={
              languageIconStyles[lang] ??
              "w-2.5 h-2.5 rounded-full bg-muted-foreground/50"
            }
          />

          {lang}
        </Badge>
      ))}
    </div>
  );
};

export default RepositoryLangs;
