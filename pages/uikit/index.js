import MainInput from "@/components/shared/inputs/MainInput";
import EventaCards from "@/components/ui/containers/eventsContainer/EventaCards";
import React from "react";

export default function index() {
  return (
    <div className=" bg-mainBg">
      <div className="max-w-[1220px] mx-auto py-20">
        <EventaCards />

        <div>
          <MainInput />
        </div>
      </div>
    </div>
  );
}
