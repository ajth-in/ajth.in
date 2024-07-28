"use client";
import { CldImage } from "next-cloudinary";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, MapPin } from "lucide-react";
import { Link2 } from "react-feather";
export const HeroSection = () => {
  return (
    <div className="flex gap-3 py-10">
      <CldImage
        className="rounded-xl"
        src="ajith-dp_qlwgip" // Use this sample image or upload your own via the Media Explorer
        width="50" // Transform the image: auto-crop to square aspect_ratio
        height="50"
        alt="sample image"
        crop={{
          type: "auto",
          source: true,
        }}
      />
      <div>
        <h1 className=" text-md font-semibold p-0 m-0">
          Ajith Kumar P M <i className="font-light ">(he/him)</i>
        </h1>
        <div className="text-xs text-gray-300">
          Product engineer{" "}
          <HoverCard>
            <HoverCardTrigger className="font-bold hover:underline cursor-pointer">
              @strollby-ust
            </HoverCardTrigger>
            <HoverCardContent className="bg-black flex gap-4">
              <div>
                <CldImage
                  className="rounded-full shrink-0 grow-0"
                  src="strollby_logo_dii8fc"
                  width="50"
                  height="50"
                  alt="sample image"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="underline">Travel planning platform </span>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/trivandrum+india/data=!4m2!3m1!1s0x3b05bbb805bbcd47:0x15439fab5c5c81cb?sa=X&ved=1t:155783&ictx=111"
                  className="flex gap-1 items-center  text-gray-300 italic"
                >
                  <MapPin width={12} height={12} />{" "}
                  <span>Trivandrum, India</span>
                </a>
                <a
                  target="_blank"
                  href="https://strollby.com/"
                  className="flex gap-1 items-center  font-bold py-0 my-0"
                >
                  <Link2 width={12} height={12} /> <span>strollby.com</span>
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};
