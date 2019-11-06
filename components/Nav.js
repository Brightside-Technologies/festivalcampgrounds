import React from "react";
import styled from "styled-components";
import Link from "next/link";

// TODO: remove disabled property
const links = [
  { href: "/", label: "Home", isDisabled: false },
  { href: "/about-us", label: "About Us", isDisabled: false },
  { href: "/camp", label: "Camp", isDisabled: true },
  { href: "/info", label: "Info", isDisabled: true },
  { href: "/contact", label: "Contact", isDisabled: true }
];

const Navbar = styled.nav`
  height: 3.25rem;
`;

const NavbarBrand = styled.a`
  padding: 0;
  height: 100%;
  img {
    max-height: 100%;
  }
`;

const NavbarCollapse = styled.div`
  &.show,
  &.collapsing {
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
`;

const NavbarBurger = styled.button`
  height: 40px;
  width: 40px;
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: auto;
  border-radius: 50%;
  background-color: transparent;
  border: 0;
  z-index: 1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
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

const NavLink = styled.a`
  &.disabled {
    color: rgba(0, 0, 0, 0.3) !important;
  }
`;

const Nav = () => (
  <Navbar className="shadow-sm navbar navbar-light bg-light fixed-top navbar-expand-sm">
    <NavbarBrand className="navbar-brand" href="/">
      <img
        src="https://www.festivalcampgrounds.com/wp-content/uploads/2019/01/logo_black_03.png"
        className="d-inline-block align-top"
        alt=""
      />
    </NavbarBrand>
    <NavbarBurger
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navlinks"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </NavbarBurger>
    <NavbarCollapse className="collapse navbar-collapse" id="navlinks">
      <ul className="navbar-nav mr-auto">
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <NavLink
              className={`font-weight-bold text-dark nav-link${
                link.isDisabled ? " disabled" : ""
              }`}
              href={link.href}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavbarCollapse>
  </Navbar>
);

export default Nav;
