import React from "react";
import clsx from "clsx";
import Link from "next/link";

const baseClasses =
  "inline-block select-none text-center align-middle font-bold uppercase rounded text-white " +
  "px-3 py-1.5 text-sm leading-6 " +
  "bg-gradient-to-tr from-[#fbab7e] to-[#f4778d] " +
  "hover:bg-gradient-to-tr hover:from-[#fbab7e] hover:to-[#e45460] " +
  "hover:no-underline";

const disabledClasses = "opacity-50 cursor-default pointer-events-none";

function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/");
}

export default function Button({
  className,
  children,
  disabled,
  href,
  target,
  rel,
  ...rest
}) {
  const classes = clsx(baseClasses, disabled && disabledClasses, className);

  // Internal link => Next Link (single <a> output)
  if (href && isInternalHref(href)) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled ? "true" : undefined}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  // External link => plain anchor
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-disabled={disabled ? "true" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Button
  return (
    <button type="button" disabled={disabled} className={classes} {...rest}>
      {children}
    </button>
  );
}

export function MyButton({ className, children, disabled, ...rest }) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(baseClasses, disabled && disabledClasses, className)}
    >
      {children}
    </button>
  );
}
