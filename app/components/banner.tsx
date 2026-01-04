import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function Banner() {
  return (
    <header className="group relative flex max-w-fit items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-2 pr-6 transition-all hover:bg-white/10">
      <Avatar className="h-12 w-12 border  border-white/20 shadow-sm">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/62293152?v=4"
          alt="Aji"
        />
        <AvatarFallback className="bg-neutral-800 text-xs">AJ</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h1 className="text-lg font-medium leading-none tracking-tight text-white/90">
          Ajith Kumar P M <span className="mx-1 text-white/30 text-lg">•</span>
          <span className="font-mono text-sm font-bold text-green-400">
            Dev
          </span>
        </h1>
        <p className="mt-1 text-sm leading-none text-neutral-500">
          Product Engineer{" "}
          <Link
            target="_blank"
            className="text-neutral-400 font-bold hover:text-white"
            href="https://ust.com"
          >
            @UST
          </Link>
        </p>
      </div>
    </header>
  );
}
