"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brandInfo, navLinks } from "../data";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="navBar">
      <div className="hidden lg:flex flexBetween w-full">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="/assets/images/logos/horizontalLogo.svg"
              width={100}
              height={100}
              alt="Alice Dental Horizonta Logo"
              className=" w-46 object-cover"
            />
          </Link>
          <h3>
            <a
              href={brandInfo.phone.link}
              className="font-serif p-2 text-2xl font-normal text-text-body tracking-wider"
            >
              (+88) 01310-789148
            </a>
          </h3>
        </div>

        <div className="flex items-center gap-8">
          <ul className=" flex flexCenter gap-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.URL;

              return (
                <li
                  key={index}
                  className={`navLinks ${isActive ? "activeNavLink" : ""}`}
                >
                  <Link href={link.URL}>{link.title}</Link>
                </li>
              );
            })}
          </ul>

          <Button
            asChild
            size="lg"
            className="hover:scale-x-105 transition-all duration-300"
          >
            <a
              href="tel:+1234567890"
              className="uppercase tracking-wider text-base font-semibold"
            >
              Appointment Now
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className=" flex flexBetween lg:hidden w-full">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/assets/images/logos/verticalLogo.svg"
            width={100}
            height={100}
            alt="Alice Dental Vertical Logo"
            className=" md:w-14 w-11 object-contain"
          />
        </Link>

        <div className="flex flexCenter gap-8">
          <Button asChild>
            <a
              href="tel:+1234567890"
              className="uppercase tracking-wider text-sm font-medium "
            >
              Book now
            </a>
          </Button>

          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-10 h-10" strokeWidth={0.8} />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {isMenuOpen && (
        <>
          <div className="openMenuOverlay">
            <div className="flex flexBetween py-4 px-6 ">
              <Link href="/">
                <Image
                  src="/assets/images/logos/verticalLogo.svg"
                  width={100}
                  height={100}
                  alt="Alice Dental Vertical Logo"
                  className="md:w-14 w-11 object-contain"
                  onClick={() => setIsMenuOpen(false)}
                />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" strokeWidth={1} />
              </button>
            </div>

            <ul className=" flex flex-col md:gap-6 gap-4 px-6 py-4 ">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.URL;

                return (
                  <li
                    key={index}
                    className={` capitalize text-text-placeholder text-3xl md:text-4xl font-light py-2 ${
                      isActive ? "text-white font-medium" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={link.URL}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>

            <div className=" grid grid-cols-2 h-16 border-t border-border w-full">
              <div className="flex flexCenter border-r border-border">
                <span>
                  <a
                    href={brandInfo.phone.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" capitalize text-lg font-medium "
                  >
                    Call
                  </a>
                </span>
              </div>
              <div className="flex flexCenter pl-4">
                <span>
                  <a
                    href={brandInfo.address.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" capitalize text-lg font-medium "
                  >
                    Location
                  </a>
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
