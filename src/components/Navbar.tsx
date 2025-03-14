"use client";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[var(--navbar-bg)]">
      <div className="w-full text-[var(--navbar-text)]">
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Navbar container */}
          <div className="flex items-center justify-between py-8 md:py-10">
            {/* Centered Logo */}
            <div className="flex justify-center items-center absolute left-1/2 transform -translate-x-1/2">
              <img
                src="/images/navbar_logo.jpg"
                alt="Navbar Logo"
                className="w-12 h-12"
              />
            </div>
            {/* Hamburger button positioned absolutely at the right */}
            <button
              ref={buttonRef}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-lg focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Navigation Menu Overlay */}
          <div
            ref={overlayRef}
            onClick={() => setIsOpen(false)}
            className={`${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            } fixed top-0 left-0 w-full h-full bg-[var(--overlay-bg)] z-50 flex flex-col justify-center items-center transition-all duration-700`}
          >
            <nav ref={navRef} className="flex flex-col justify-center items-center">
              <a
                className="text-white text-2xl mb-6"
                href="#"
                onClick={(e) => e.stopPropagation()}
              >
                Home
              </a>
              <a
                className="text-white text-2xl mb-6"
                href="#"
                onClick={(e) => e.stopPropagation()}
              >
                About
              </a>
              <a
                className="text-white text-2xl mb-6"
                href="#"
                onClick={(e) => e.stopPropagation()}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
