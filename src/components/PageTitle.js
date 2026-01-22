import React from "react";
import clsx from "clsx";

export default function PageTitle({ children, className, style }) {
  return (
    <h1 className={clsx("mb-6 text-5xl md:text-6x", className)} style={style}>
      {children}
    </h1>
  );
}
