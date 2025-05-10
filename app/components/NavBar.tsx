"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../data";
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
          <h3 className="font-serif p-2 text-xl font-light tracking-wider">
            (+88) 01310-789148
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
        <Link href="/">
          <Image
            src="/assets/images/logos/verticalLogo.svg"
            width={40}
            height={40}
            alt="Alice Dental Vertical Logo"
            className="object-contain"
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
            <div className="flex-between py-4 px-6 ">
              <Link href="/" className="p-2">
                <Image
                  src="/assets/images/logos/verticalLogo.svg"
                  width={40}
                  height={40}
                  alt="Alice Dental Vertical Logo"
                  className="object-contain"
                />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" strokeWidth={1} />
              </button>
            </div>

            <ul className="flex flex-col gap-8 mt-4 py-4 px-6 ">
              {navLinks.map((link, index) => (
                <Link
                  href={link.URL}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li className=" capitalize text-3xl tracking-wide cursor-pointer">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="grid grid-cols-2 h-16 border-t border-border">
              <div className="flex flex-center border-r border-border ">
                <span>Call</span>
              </div>
              <div className="flex flex-center pl-4">
                <span>Mail</span>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
