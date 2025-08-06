'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white border-t rounded-t-[30px] border-[#1D3A69] overflow-hidden">
      {/* Decorative SVGs */}
      <Image
        src="/SVG/TopCircle.svg"
        alt="Top Left Circle"
        width={120}
        height={120}
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/SVG/RightDownCircle.svg"
        alt="Bottom Right Circle"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 z-0"
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10 px-4 md:px-16">
          <div className="col-span-1 ">
            <Link href="/" className="block mb-4">
              <Image
                src="/Logo.svg"
                alt="SHILP AARAMBH GIFT CITY RUN"
                width={120}
                height={80}
              />
            </Link>
          </div>

          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about/event-history" className="text-gray-600 hover:text-blue-700 text-sm">
                  Event History
                </Link>
              </li>
              <li>
                <Link href="/about/shilp-aarambh" className="text-gray-600 hover:text-blue-700 text-sm">
                  Shilp Aarambh
                </Link>
              </li>
              <li>
                <Link href="/about/snehshilp-foundation" className="text-gray-600 hover:text-blue-700 text-sm">
                  Snehshilp Foundation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-700 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Race Category */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-4">Race Category</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/race-categories/half-marathon" className="text-gray-600 hover:text-blue-700 text-sm">
                  Half Marathon
                </Link>
              </li>
              <li>
                <Link href="/race-categories/vijay-diwas-run" className="text-gray-600 hover:text-blue-700 text-sm">
                  10km Vijay Diwas Run
                </Link>
              </li>
              <li>
                <Link href="/race-categories/fun-run" className="text-gray-600 hover:text-blue-700 text-sm">
                  5km Fun Run
                </Link>
              </li>
            </ul>
          </div>

          {/* Runners Information */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-4">Runners Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/information/expo" className="text-gray-600 hover:text-blue-700 text-sm">
                  BIB Expo
                </Link>
              </li>
              <li>
                <Link href="/information/race-day-information" className="text-gray-600 hover:text-blue-700 text-sm">
                  RaceDay Information
                </Link>
              </li>
              <li>
                <Link href="/information/routes-maps" className="text-gray-600 hover:text-blue-700 text-sm">
                  Route Maps
                </Link>
              </li>
              <li>
                <Link href="/information/prize-money" className="text-gray-600 hover:text-blue-700 text-sm">
                  Prize Money
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-2">Social Media</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.055 10.055 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SHILP AARAMBH GIFT CITY RUN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
