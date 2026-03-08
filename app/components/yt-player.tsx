"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useState } from "react";
import { css } from "styled-system/css";

export function CornerYoutubeAudio() {
  const [muted, setMuted] = useState(false);

  return (
    <div
      className={css({
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      })}
    >
      <button
        onClick={() => setMuted(!muted)}
        aria-label={muted ? "Unmute music" : "Mute music"}
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1.75rem",
          height: "1.75rem",
          borderRadius: "9999px",
          border: "1px solid",
          borderColor: { base: "neutral.200", _dark: "rgba(64, 64, 64, 0.5)" },
          backgroundColor: { base: "rgba(255,255,255,0.8)", _dark: "rgba(23,23,23,0.8)" },
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          color: "fg.muted",
          transition: "all 0.2s",
          _hover: {
            color: { base: "neutral.900", _dark: "neutral.100" },
            borderColor: { base: "neutral.300", _dark: "neutral.600" },
          },
        })}
      >
        {muted ? <VolumeOff size={12} /> : <Volume2 size={12} />}
      </button>

      <iframe
        className={css({
          position: "absolute",
          height: 0,
          width: 0,
          opacity: 0,
          pointerEvents: "none",
        })}
        src={`https://www.youtube.com/embed/al21Vtlsg4A?start=12&autoplay=1&mute=${muted ? 1 : 0}&rel=0`}
        title="YouTube audio"
        allow="autoplay"
      />
    </div>
  );
}
