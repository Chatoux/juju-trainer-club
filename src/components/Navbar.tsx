"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#383838] text-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
                  Home
                </Link>
                <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
                  About
                </Link>
                <Link href="/training-programs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
                  Training Programs
                </Link>
                <Link href="/nutrition-plans" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
                  Nutrition Plans
                </Link>
                <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#EC5C39] inline-flex items-center justify-center p-2 rounded-md text-[#000000] hover:bg-[#EC5C39] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
            About
          </Link>
          <Link href="/training-programs" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
            Training Programs
          </Link>
          <Link href="/nutrition-plans" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
            Nutrition Plans
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#EC5C39] hover:text-[#000000]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;