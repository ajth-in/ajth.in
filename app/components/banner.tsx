import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Banner() {
  return (
    <header className="group relative flex max-w-fit items-center gap-4 rounded-xl border dark:border-white/10 border-black/5 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 p-2 pr-6 transition-all ">
      <Avatar className="h-12 w-12 border  border-white/20 shadow-sm">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62293152?v=4"
          alt="Aji"
        />
        <AvatarFallback className="bg-neutral-800 text-xs">AJ</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h1 className="text-lg font-medium leading-none tracking-tight dark:text-white/90 text-black">
          Ajith Kumar P M{" "}
          <span className="mx-1 dark:text-white/30 text-black/30 text-lg">
            •
          </span>
          <span className="font-mono text-sm font-bold text-green-400">
            Dev
          </span>
        </h1>
        <p className="mt-1 text-sm leading-none dark:text-neutral-500 text-neutral-600">
          Product Engineer{" "}
          <Link
            target="_blank"
            className="dark:text-neutral-400 text-neutral-500 font-bold hover:text-white"
            href="https://ust.com"
          >
            @UST
          </Link>
        </p>
      </div>
    </header>
  );
}
