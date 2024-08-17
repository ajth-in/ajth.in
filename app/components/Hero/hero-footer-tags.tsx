import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../@/components/ui/hover-card";
import { Badge } from "../../../@/components/ui/badge";
import { CldImage } from "next-cloudinary";
import { StrollbyHoverCardContent } from "../companies/Strollby";
import { MapPin } from "react-feather";

const FooterTags = () => {
  return (
    <div className="flex flex-row gap-4">
      <HoverCard>
        <HoverCardTrigger className="font-bold hover:underline cursor-pointer">
          <Badge variant="outline" className={"text-sm min-h-[30px]"}>
            Front end engineer @strollby
            <CldImage
              className={"mx-1 rounded-full"}
              alt={"Strollby logo"}
              src={"strollby_logo_dii8fc"}
              width={20}
              height={20}
            />
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent className="bg-black flex gap-4">
          <StrollbyHoverCardContent />
        </HoverCardContent>
      </HoverCard>
      <Badge variant="outline" className={"text-sm"}>
        <MapPin width={12} className={"mx-1"} /> India, Kerala
      </Badge>
    </div>
  );
};

export default FooterTags;