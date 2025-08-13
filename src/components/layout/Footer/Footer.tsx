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
          <div className="col-span-1">
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
              <li><Link href="/about/event-history" className="text-gray-600 hover:text-blue-700 text-sm">Event History</Link></li>
              <li><Link href="/about/shilp-aarambh" className="text-gray-600 hover:text-blue-700 text-sm">Shilp Aarambh</Link></li>
              <li><Link href="/about/snehshilp-foundation" className="text-gray-600 hover:text-blue-700 text-sm">Snehshilp Foundation</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-700 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-4">Race Category</h4>
            <ul className="space-y-2">
              <li><Link href="/race-categories/half-marathon" className="text-gray-600 hover:text-blue-700 text-sm">Half Marathon</Link></li>
              <li><Link href="/race-categories/vijay-diwas-run" className="text-gray-600 hover:text-blue-700 text-sm">10km Vijay Diwas Run</Link></li>
              <li><Link href="/race-categories/fun-run" className="text-gray-600 hover:text-blue-700 text-sm">5km Fun Run</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-4">Runners Information</h4>
            <ul className="space-y-2">
              <li><Link href="/information/expo" className="text-gray-600 hover:text-blue-700 text-sm">BIB Expo</Link></li>
              <li><Link href="/information/race-day-information" className="text-gray-600 hover:text-blue-700 text-sm">RaceDay Information</Link></li>
              <li><Link href="/information/routes-maps" className="text-gray-600 hover:text-blue-700 text-sm">Route Maps</Link></li>
              <li><Link href="/information/prize-money" className="text-gray-600 hover:text-blue-700 text-sm">Prize Money</Link></li>
            </ul>
          </div>

          {/* Social Media with custom SVG */}
         <div className="col-span-1">
            <h4 className="text-base font-semibold text-blue-800 mb-5">Social Media</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="facebook" className="hover:opacity-80 transition">
                <Image
                  src="/SVG/F.svg"
                  alt="Facebook icon"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" aria-label="twitter" className="hover:opacity-80 transition">
                <Image
                  src="/SVG/T.svg"
                  alt="Twitter icon"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" aria-label="linkedin" className="hover:opacity-80 transition">
                <Image
                  src="/SVG/L.svg"
                  alt="LinkedIn icon"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#" aria-label="instagram" className="hover:opacity-80 transition">
                <Image
                  src="/SVG/I.svg"
                  alt="Instagram icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SHILP AARAMBH GIFT CITY RUN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
