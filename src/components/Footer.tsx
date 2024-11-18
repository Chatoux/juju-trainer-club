'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#383838] text-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#FFFFFF]">Contact Us</h3>
            <p className="text-[#F4F4F3]">Email: contact@company.com</p>
            <p className="text-[#F4F4F3]">Phone: +1 (123) 456-7890</p>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:text-[#EC5C39] transition-colors duration-300"
                />
              </a>
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="hover:text-[#EC5C39] transition-colors duration-300"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:text-[#EC5C39] transition-colors duration-300"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-[#F4F4F3] pt-6">
          <p className="text-[#F4F4F3]">&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;