import {
  LocationIcon,
  TimerIcon,
  HeartIcon,
  ShareIcon,
} from "@/public/utils/Icons";
import Image from "next/image";
import React from "react";
import Buttons from "../buttons/Buttons";
import PriceButton from "../buttons/PriceButton";

export default function EventCard() {
  return (
    <div className="rounded-lg overflow-hidden bg-secondaryBg">
      <div className="w-full aspect-[3/2] relative ">
        <Image src="/assets/images/test1.jpg" fill className="object-cover " />
        <div className="absolute -bottom-4 left-4 flex gap-[6px] z-[100]">
          <Buttons IconLeft={HeartIcon} iconWrapper />
          <Buttons IconLeft={ShareIcon} iconWrapper />
        </div>
      </div>
      <div className="py-6 px-3">
        <p className="text-lg font-bold text-textPrimary">
          MINDSHOP Create Innovative Products by Design Thinking
        </p>
        <p className="text-sm font-normal text-textSecondary mt-1">
          MINDSHOP Create Innovative Products by Design Thinking
        </p>
        <div className="mt-3 flex items-center gap-1">
          <div className="w-4 h-4 text-textBrand">
            <TimerIcon />
          </div>
          <p className="text-sm font-bold text-textBrand ">
            Thu Jun 15 2023 at 06:00 pm
          </p>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <div className="w-4 h-4 text-textTertiary">
            <LocationIcon />
          </div>
          <p className="text-[13px] font-normal text-textTertiary ">
            Design thinking / istanbul, Kadikoy
          </p>
        </div>
        <div className=" mt-4">
          <PriceButton />
        </div>
      </div>
    </div>
  );
}
