const facts = [
  {
    label: "Songs for my Euro truck sim radio",
    href: "https://www.youtube.com/playlist?list=PLo8UW92TnA_Zu3Wt7FL5xCkduVFhlpNQW",
  },
  {
    label: "Big fan of Bukowski's poem",
    href: "https://www.youtube.com/watch?v=Yhi6y1XWb-E",
  },
  {
    label: "Wes Anderson films have a special place in my heart.",
    href: "https://www.youtube.com/watch?v=ELqdLvz60zA",
  },
  {
    label: "Talk to me in English, Malayalam, JS or Python",
    href: "mailto:anything@ajth.in",
  },
];

export function Description() {
  return (
    <section className="max-w-lg space-y-5 py-4">
      <div className="rounded-xl border dark:border-white/10 border-black/5 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 p-4 transition-all">
        <p className="text-sm leading-relaxed dark:text-neutral-300 text-neutral-900">
          Welcome to my{" "}
          <span className="dark:text-yellow-200/80 text-yellow-900 italic">
            corner
          </span>{" "}
          of the web 🌐✨. Sharing thoughts, projects, and the things I geek out
          on.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-0.5 px-1">
        {facts.map((fact) => (
          <Fact key={fact.label} label={fact.label} href={fact.href} />
        ))}
      </div>
    </section>
  );
}

function Fact({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5"
    >
      <span className="h-1 w-1 rounded-full dark:bg-neutral-700 bg-neutral-200 transition-colors group-hover:bg-green-500" />
      <span className="text-[12px] font-medium dark:text-neutral-400 text-neutral-600 dark:group-hover:text-neutral-200 group-hover:text-neutral-800 transition-colors">
        {label}
      </span>
    </a>
  );
}
