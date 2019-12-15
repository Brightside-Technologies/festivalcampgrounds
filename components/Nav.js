import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home", isDisabled: false },
  { href: "/about-us", label: "About Us", isDisabled: false },
  { href: "/amenities", label: "Amenities", isDisabled: false },
  { href: "/camping/rancho-51", label: "Camping", isDisabled: false },
  { href: "/info", label: "Info", isDisabled: false },
  { href: "/gallery", label: "Gallery", isDisabled: false },
  { href: "/contact", label: "Contact", isDisabled: false }
];

// TODO: fix glitchy nav when collapsing

const SocialNavLink = styled.a`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  text-decoration: none;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
  font-size: 1.25rem;
`;

const Navbar = styled.nav`
  height: 3.25rem;
  padding-top: 0;
  padding-bottom: 0;
  align-items: stretch;
  display: flex;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.active {
    a {
      color: #f4778d !important;
    }
  }
`;

const NavLink = styled.a`
  &.disabled {
    color: rgba(0, 0, 0, 0.3) !important;
  }

  @media (min-width: 767px) {
    &::after {
      content: "";
      display: block;
      width: 0;
      height: 3px;
      background: black;
      transition: width 0.3s;
      bottom: 0;
      left: 0;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
`;

const NavbarBrand = styled.a`
  height: 100%;
  img {
    max-height: 100%;
  }
`;

const NavbarCollapse = styled.div`
  &.show,
  &.collapsing {
    @media (max-width: 767px) {
      padding: 0.5rem;
      background-color: white;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }
  }
`;

const NavbarBurger = styled.button`
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: auto;
  background-color: transparent;
  border: 0;
  z-index: 1;
  /* &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  } */
  &:focus {
    outline: none;
  }

  span {
    background-color: black;
    display: block;
    height: 2px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
    &:nth-child(1) {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:nth-child(3) {
      top: calc(50% + 4px);
    }
  }

  &[aria-expanded="true"] {
    span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  }
`;

export default function Nav() {
  const router = useRouter();

  React.useEffect(() => {
    async function init() {
      await import("bootstrap/js/dist/util");
      await import("bootstrap/js/dist/collapse");
    }
    init();
  }, []);

  return (
    <Navbar className="shadow-sm navbar navbar-light bg-light fixed-top navbar-expand-md">
      <NavbarBrand className="navbar-brand" href="/">
        <img
          src="/images/logo_black.png"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </NavbarBrand>
      <SocialNavLink
        className="bg-light text-dark"
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/festivalcampgrounds/"
      >
        <i className="fab fa-instagram"></i>
      </SocialNavLink>
      <SocialNavLink
        className="bg-light text-dark"
        target="_blank"
        rel="noopener"
        href="https://www.facebook.com/festivalcampgrounds"
      >
        <i className="fab fa-facebook-f"></i>
      </SocialNavLink>
      <NavbarBurger
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navlinks"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </NavbarBurger>
      <NavbarCollapse className="collapse navbar-collapse" id="navlinks">
        <ul className="navbar-nav ml-auto h-100">
          {links.map((link, index) => {
            return (
              <NavItem
                key={index}
                className={`nav-item ${
                  link.href === "/"
                    ? router.asPath === "/"
                      ? "active"
                      : ""
                    : router.asPath.includes(link.href)
                    ? "active"
                    : ""
                }`}
              >
                <NavLink
                  className={`font-weight-bold text-dark nav-link${
                    link.isDisabled ? " disabled" : ""
                  }`}
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              </NavItem>
            );
          })}
        </ul>
      </NavbarCollapse>
    </Navbar>
  );
}
