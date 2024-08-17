"use client";
import { CldImage } from "next-cloudinary";
import { SocialLinks } from "../Socials";
import FooterTags from "./hero-footer-tags";

export const HeroSection = () => (
  <div className="w-full py-4 lg:py-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <SocialLinks />
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Hi, I'm ajith
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              I was bitten by a radioactive spider. And for the last few years,
              I've been the one and only Spider-Man.
            </p>
          </div>
          <FooterTags />
        </div>
        <CldImage
          className="bg-muted rounded-md aspect-square w-full"
          src="ajith-dp_rqrnup_1_x0pu2j"
          width="400"
          height="400"
          alt="sample image"
          crop={{
            type: "auto",
            source: true,
          }}
        />
      </div>
    </div>
  </div>
);