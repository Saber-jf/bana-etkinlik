import UtilityAPI from "@/public/utils/UtilityAPI";
import Image from "next/image";
import React from "react";
import { LocationIcon, TimerIcon } from "@/public/utils/Icons";

export default function Buttons({
  title,
  xs,
  sm,
  md,
  lg,
  full,

  outlined,

  brandSelected,
  disabled,
  black,
  secondary,

  solidSelected,
  toneSelected,
  brand,
  solid,
  tone,

  event,
  change,
  tab,
  transparent,
  badge,
  bold,
  textXs,
  error,
  boldError,

  success,
  chips,

  // -----------------

  iconWrapper,
  IconRight,
  IconLeft,
}) {
  const buttonClassName = UtilityAPI.classBuilder({
    "rounded-[10px] text-textBgPrimary  -tracking-[0.01em] bg-bbb hover:bg-bbbh  flex  justify-center items-center gap-2":
      brand,
    "rounded-[10px] text-textPrimary border border-border  -tracking-[0.01em] bg-bgPrimary hover:bg-bgToneHover  flex  justify-center items-center gap-2":
      secondary,

    "rounded-[10px]  text-textBrand -tracking-[0.01em] bg-bsp hover:bg-bsph  flex  justify-center items-center gap-2":
      solid,
    "rounded-[10px] text-textprimary -tracking-[0.01em] bg-bgTone hover:bg-bgToneHover  flex  justify-center items-center gap-2":
      tone,
    "rounded-[10px] text-textprimary -tracking-[0.01em] hover:bg-bgToneHover border border-border flex justify-center items-center gap-2":
      outlined,

    "rounded-full text-textTertiary p-2 bg-secondaryBg hover:bg-bbbh border-[2px] border-border flex justify-center items-center":
      iconWrapper,

    // "!text-text-textPrimary": iconColor,

    "!py-[6px] !px-[6px] text-[12px] !font-medium": xs,

    "!py-[8px] !px-[16px] text-[14px] !font-medium": sm,
    "!py-[12px] !px-[24px] text-[16px] !font-medium": md,
    "!py-[16px] !px-[32px] text-[16px] !font-medium": lg,

    "!py-[0px] !px-[0px] text-[12px] !font-medium": textXs,

    " w-full ": full,
    "!bg-black hover:bg-black": black,
    "!bg-transparent !text-textBrand ": transparent,
    "!bg-[#E0E7FF]": tab,
    "!px-2 !py-[2px] !rounded-full ": badge,

    "!bg-bgErrorBold !text-textprimaryReverse": boldError,

    "!bg-bbbf": brandSelected,
    "!bg-bst !text-bsth": disabled,

    "!bg-bspf !border-0": solidSelected,
    "!bg-bstf !border-0": toneSelected,

    "!bg-bgSuccess": success,
    "!text-textError border-borderError": error,
    "!text-white": chips,
    "!bg-bgBoldSecondary !text-textBgPrimary": bold,
  });
  function handleEvent() {
    if (event) {
      event();
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={handleEvent}
      className={`${buttonClassName}`}
    >
      {IconLeft && (
        <div className="w-4 h-4">
          <IconLeft />
        </div>
      )}

      {title && title}
      {IconRight && (
        <div className="w-4 h-4">
          <IconRight />
        </div>
      )}
    </button>
  );
}
