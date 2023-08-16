import EventCard from "@/components/shared/cards/EventCard";
import React from "react";

export default function EventaCards() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((index, item) => (
        <EventCard key={index} />
      ))}
    </div>
  );
}
