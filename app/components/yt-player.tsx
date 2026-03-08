"use client";

import { Button } from "@/components/ui/button";
import { MusicIcon } from "lucide-react";
import { Fragment, useState } from "react";
import { css } from "styled-system/css";

export function CornerYoutubeAudio() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={css({
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        borderRadius: "lg",
        backgroundColor: "black",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      })}
    >
      {open ? (
        <Fragment>
          <button
            onClick={() => setOpen(false)}
            className={css({
              fontSize: "0.75rem",
              color: "rgb(163 163 163)",
              _hover: { color: "white" },
            })}
          >
            ✕
          </button>

          <span
            className={css({
              fontSize: "0.75rem",
              color: "rgb(212 212 212)",
            })}
          >
            Now playing: American beauty sound track
          </span>

          <iframe
            className={css({
              position: "absolute",
              height: 0,
              width: 0,
              opacity: 0,
            })}
            src="https://www.youtube.com/embed/al21Vtlsg4A?start=12&autoplay=1&mute=0&rel=0"
            title="YouTube audio"
            allow="autoplay"
          />
        </Fragment>
      ) : (
        <Button onClick={() => setOpen(true)} size={"icon-lg"}>
          <MusicIcon width={"30px"} height={"30px"} />
        </Button>
      )}
    </div>
  );
}
