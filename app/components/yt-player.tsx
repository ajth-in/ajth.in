"use client";

import { Button } from "@/components/ui/button";
import { MusicIcon } from "lucide-react";
import { useState } from "react";

export function CornerYoutubeAudio() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <Button
        onClick={() => setOpen(true)}
        size={"icon-lg"}
        className="absolute bottom-2 right-2 cursor-pointer"
      >
        <MusicIcon width={"30px"} height={"30px"} />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-3 rounded-lg bg-black px-3 py-2 shadow-2xl">
      <button
        onClick={() => setOpen(false)}
        className="text-xs text-neutral-400 hover:text-white"
      >
        ✕
      </button>

      <span className="text-xs text-neutral-300">
        Now playing: American beauty sound track
      </span>

      <iframe
        className="absolute h-0 w-0 opacity-0"
        src="https://www.youtube.com/embed/al21Vtlsg4A?start=12&autoplay=1&mute=0&rel=0"
        title="YouTube audio"
        allow="autoplay"
      />
    </div>
  );
}
