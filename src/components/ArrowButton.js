import React from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArrowButton({ variant, onClick, className }) {
  const isLeft = variant === "left";
  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      aria-label="Carousel button"
      onClick={onClick}
      className={clsx(
        "absolute z-10 flex h-10 w-10 items-center justify-center rounded-full p-3 border-black border",
        "bg-gradient-to-b from-[rgba(244,119,141,0.85)] to-[rgba(247,206,104,0.7)]",
        "transition-colors duration-150",
        "hover:bg-[#e45460]",
        "focus:outline-none",
        isLeft ? "left-0" : "right-0",
        className
      )}
    >
      <Icon className="h-full w-full text-black" />
    </button>
  );
}
