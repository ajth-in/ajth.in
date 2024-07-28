import { CldImage } from "next-cloudinary";
import { Fragment } from "react";
import { Link2, MapPin } from "react-feather";

export const StrollbyHoverCardContent = () => {
  return (
    <Fragment>
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
          <MapPin width={12} height={12} /> <span>Trivandrum, India</span>
        </a>
        <a
          target="_blank"
          href="https://strollby.com/"
          className="flex gap-1 items-center  font-bold py-0 my-0"
        >
          <Link2 width={12} height={12} /> <span>strollby.com</span>
        </a>
      </div>
    </Fragment>
  );
};
