"use client";
import { CldImage } from "next-cloudinary";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

import { Link, MapPin } from "lucide-react";
import { Link2 } from "react-feather";
import { StrollbyHoverCardContent } from "../companies/Strollby";
export const HeroSection = () => {
  return (
    <div className="flex gap-3 py-8">
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
          Ajith Kumar P M{" "}
          <i className="font-light text-xs font-mono">(he/him)</i>
        </h1>
        <div className="text-xs text-gray-300">
          Product engineer{" "}
          <HoverCard>
            <HoverCardTrigger className="font-bold hover:underline cursor-pointer">
              @strollby-ust
            </HoverCardTrigger>
            <HoverCardContent className="bg-black flex gap-4">
              <StrollbyHoverCardContent />
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};
