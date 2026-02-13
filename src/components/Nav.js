import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "/", label: "Home", isDisabled: false },
  { href: "/about-us", label: "About Us", isDisabled: false },
  { href: "/amenities", label: "Amenities", isDisabled: false },
  { href: "/camping/rancho-51", label: "Camping", isDisabled: false },
  { href: "/info", label: "Info", isDisabled: false },
  { href: "/gallery", label: "Gallery", isDisabled: false },
  { href: "/sponsors", label: "Sponsors", isDisabled: false },
  { href: "/contact", label: "Contact", isDisabled: false }
];

function isActivePath(routerAsPath, href) {
  if (href === "/") return routerAsPath === "/";
  if (
    href === "/camping/rancho-51" &&
    routerAsPath.startsWith("/accommodation/rancho-51")
  )
    return true;
  return routerAsPath.includes(href) || routerAsPath === href;
}

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  // Close the mobile nav when route changes
  React.useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    router.events?.on("routeChangeComplete", handleRouteChange);
    return () => router.events?.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <nav className="fixed top-0 z-[1100] flex h-[3.25rem] w-full items-stretch bg-gray-100 shadow-sm">
      <div className="flex w-full items-stretch px-4">
        {/* Brand */}
        <Link href="/" className="flex h-full items-center">
          <img
            src="/images/logo-new-simple.png"
            className="max-h-full"
            alt="Logo"
          />
        </Link>

        {/* Social links */}
        <SocialLinks
          className="flex items-stretch"
          linkClassName="flex items-center px-2 py-2 text-xl text-gray-900"
          iconClassName="h-5 w-5"
        />

        {/* Burger (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="relative ml-auto block h-full w-12 flex-none shrink-0 overflow-visible bg-transparent md:hidden"
        >
          <span
            aria-hidden="true"
            className={clsx(
              "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 origin-center bg-black transition-all duration-150 ease-out",
              open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
            )}
          />
          <span
            aria-hidden="true"
            className={clsx(
              "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 origin-center bg-black transition-all duration-150 ease-out",
              open ? "scale-x-0 opacity-0" : "opacity-100"
            )}
          />
          <span
            aria-hidden="true"
            className={clsx(
              "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 origin-center bg-black transition-all duration-150 ease-out",
              open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
            )}
          />
        </button>

        {/* Links: desktop */}
        <div className="ml-auto hidden h-full items-stretch md:flex">
          <ul className="flex h-full items-stretch">
            {links.map((link) => {
              const active = isActivePath(router.asPath, link.href);

              return (
                <li key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className={clsx(
                      "group relative block px-3 py-2 font-bold",
                      link.isDisabled && "pointer-events-none text-black/30",
                      active ? "text-[#f4778d]" : "text-gray-900"
                    )}
                    aria-disabled={link.isDisabled ? "true" : undefined}
                  >
                    {link.label}

                    {/* hover underline (desktop only) */}
                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Links: mobile collapse */}
      <div
        className={clsx(
          "absolute left-0 right-0 top-[3.25rem] overflow-hidden transition-all duration-300 ease-out md:hidden",
          open
            ? "max-h-[70vh] translate-y-0 opacity-100 pointer-events-auto"
            : "max-h-0 -translate-y-2 opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="bg-white p-2 shadow">
          <ul className="flex flex-col">
            {links.map((link) => {
              const active = isActivePath(router.asPath, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "block px-3 py-2 font-bold",
                      link.isDisabled && "pointer-events-none text-black/30",
                      active ? "text-[#f4778d]" : "text-gray-900"
                    )}
                    aria-disabled={link.isDisabled ? "true" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
