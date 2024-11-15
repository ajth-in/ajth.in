"use client";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [open, setOpen]= useState(true)

  const images = ["3_pompze", "2_tm8snq", "1_nlbpvd", "4_hxqrmk", "5_tyzlv7"];
  const containerStyles = [
    "row-span-3 col-span-1",
    "row-span-1 col-span-1",
    "row-span-2 col-span-1",
    "row-span-2 col-span-1",
    "row-span-2 col-span-1",
  ];
  return (
    <div className="grid py-10 p-4 lg:grid-cols-3 h-100 gap-2 lg:grid-rows-3 bg-dark min-h-[800px]">
      {images.map((image, index) => (
        <div
          className={cx(
            "relative flex  border border-gray-300/20 rounded-lg bg-dark",
            containerStyles[index],
          )}
        >
          <CldImage
            fill
            alt={image}
            style={{ objectFit: "cover" }}
            className="rounded-xl opacity-20 hover:opacity-70 duration-500 h-[200px]"
            src={image}
          />
        </div>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="py-2 bg-white text-black max-h-[500px] overflow-y-auto flex flex-col items-center">
          <DialogHeader className="text-xl self-start"> 
            For my dear Haritha
          </DialogHeader>
      
          <CldImage src="hugs-and_zoc6yo.gif" width={200} height={400} alt="couple cute" />
          <DialogDescription className="text-center">
          “we shall always be, you and i,<br/>
alone upon the earth,
to begin life.” 
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;
