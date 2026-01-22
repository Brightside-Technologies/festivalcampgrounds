import React from "react";

export default function Heading({ className = "", ...props }) {
  return (
    <h6
      className={`block text-[11px] uppercase tracking-[1px] mb-[5px] ${className}`}
      {...props}
    />
  );
}
