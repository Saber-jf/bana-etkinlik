import React from "react";
import { ShoppingBasketIcon } from "@/public/utils/Icons";

ShoppingBasketIcon;

export default function PriceButton() {
  return (
    <button className="w-full bg-mainBg rounded-xl border border-border">
      <div className="flex items-center justify-between  p-3">
        <p className="text-[13px] font-semibold text-textBrown line-through">
          40 TL
        </p>
        <p className="text-[13px] font-semibold text-textPrimary ">40 TL</p>
        <div></div>
        <div className="px-4  border-l">
          <div className="text-textBrand w-5 h-5">
            <ShoppingBasketIcon />
          </div>
        </div>
      </div>
    </button>
  );
}
