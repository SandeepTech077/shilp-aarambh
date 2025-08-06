'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NestedItem {
  name: string;
  path: string;
  id?: number;
}

interface DropdownItem {
  name: string;
  path: string;
  hasNestedDropdown?: boolean;
  nestedItems?: NestedItem[];
}

interface NavLink {
  name: string;
  path: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const navLinks: NavLink[] = [
  {
    name: 'About',
    path: '/aboutus', // Changed from '/about' to '/aboutus' to match your folder structure
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Event History',
        path: '/aboutus/event-history', // Changed from '/about/event-history'
        hasNestedDropdown: true,
        nestedItems: [
          { name: 'Season 1', path: '/aboutus/event-history/1', id: 1 }, // Changed paths
          { name: 'Season 2', path: '/aboutus/event-history/2', id: 2 },
          { name: 'Season 3', path: '/aboutus/event-history/3', id: 3 },
        ]
      },
      { name: 'Shilp Aarambh', path: '/aboutus/shilp-aarambh' }, // Changed all paths
      { name: 'Snehshilp Foundation', path: '/aboutus/snehshilp' },
      { name: 'Brand Ambassador', path: '/aboutus/brand-ambassador' },
      { name: 'Race Director', path: '/aboutus/race-director' },
      { name: 'Gift City', path: '/aboutus/gift-city' },
      { name: 'Place To Visit', path: '/aboutus/place-to-visit' },
   
    ]
  },
  {
    name: 'Race Categories',
    path: '/race-categories',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Half Marathon', path: '/race-categories/half-marathon' },
      { name: '10km Vijay Diwas Run', path: '/race-categories/vijay-diwas-run' },
      { name: '5km Fun Run', path: '/race-categories/fun-run' },
    ]
  },
  {
    name: 'Vijay Diwas Run',
    path: '/vijay-diwas-run',
    hasDropdown: false
  },
  {
    name: 'Race Day Information',
    path: '/information',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Race Day Information', path: '/information/race-day-information' },
      { name: 'BIB Expo', path: '/information/expo' },
      { name: 'Prize Money ', path: '/information/prize-money' },
      { name: 'Pacers', path: '/information/pacers' },
      // { name: 'Race Booklet', path: '/information/race-booklet' },
      { name: 'FAQ', path: '/information/faqs' },
      { name: 'Routes Maps', path: '/information/routes-maps' },
      { name: 'How To Reach', path: '/information/how-to-reach' },
      { name: 'Near By Hotels', path: '/information/near-by-hotel' },
         { name: 'Aims Certified', path: '/information/aims-certified' },
    ]
  },
  {
    name: 'Results',
    path: '/results',
    hasDropdown: false
  },
  {
    name: 'Media',
    path: '/media',
    hasDropdown: false
  },
  {
    name: 'Contact us',
    path: '/contact',
    hasDropdown: false
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openMobileNestedDropdown, setOpenMobileNestedDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMobileDropdown = (path: string) => {
    setOpenMobileDropdown(openMobileDropdown === path ? null : path);
    setOpenMobileNestedDropdown(null);
  };

  const toggleMobileNestedDropdown = (path: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMobileNestedDropdown(openMobileNestedDropdown === path ? null : path);
  };

  // Helper function to check if current path matches nested items
  const isNestedPathActive = (basePath: string) => {
    return pathname?.startsWith(basePath + '/');
  };

  return (
    <nav className="flex items-center relative">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-1">
        {navLinks.map((link) => (
          <div key={link.path} className="relative group">
            {link.hasDropdown ? (
              <div
                className={`px-3 py-2 font-medium transition-colors hover:text-blue-700 cursor-pointer flex items-center ${
                  pathname?.startsWith(link.path + '/') ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                {link.name}
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            ) : (
              <Link
                href={link.path}
                className={`px-3 py-2 font-medium transition-colors hover:text-blue-700 ${
                  pathname === link.path ? 'text-[#1D3A69]' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            )}

            {link.hasDropdown && link.dropdownItems && (
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {link.dropdownItems.map((item) => (
                    <div key={item.path} className="relative group/nested">
                      {item.hasNestedDropdown ? (
                        <Link
                          href={item.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between ${
                            pathname === item.path || isNestedPathActive(item.path) ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ) : (
                        <Link
                          href={item.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            pathname === item.path ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}

                      {item.hasNestedDropdown && item.nestedItems && (
                        <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200">
                          <div className="py-1">
                            {item.nestedItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.path}
                                href={nestedItem.path}
                                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                  pathname === nestedItem.path ? 'text-blue-700 bg-blue-50' : 'text-gray-700'
                                }`}
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <Link
          href="/register-page"
          className="ml-6 bg-[#003777] hover:bg-blue-900 text-white px-4 py-2 rounded font-medium"
        >
          Register Now
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-blue-800">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.path} className="border-b border-gray-100">
                <div
                  className={`flex justify-between items-center px-4 py-3 cursor-pointer ${
                    (link.hasDropdown && pathname?.startsWith(link.path + '/')) ||
                    (!link.hasDropdown && pathname === link.path)
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => {
                    if (link.hasDropdown) {
                      toggleMobileDropdown(link.path);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                >
                  {link.hasDropdown ? (
                    <span className="flex-grow font-medium">{link.name}</span>
                  ) : (
                    <Link
                      href={link.path}
                      className="flex-grow font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.hasDropdown && (
                    <svg
                      className={`h-5 w-5 transition-transform ${openMobileDropdown === link.path ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {/* Dropdown */}
                {link.hasDropdown && link.dropdownItems && openMobileDropdown === link.path && (
                  <div className="bg-gray-50">
                    {link.dropdownItems.map((item) => (
                      <div key={item.path}>
                        <div
                          className={`flex justify-between items-center px-8 py-3 text-sm border-l-4 cursor-pointer ${
                            (item.hasNestedDropdown && (pathname === item.path || isNestedPathActive(item.path))) ||
                            (!item.hasNestedDropdown && pathname === item.path)
                              ? 'border-blue-600 text-blue-700 bg-blue-50'
                              : 'border-transparent text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                          }`}
                        >
                          <Link
                            href={item.path}
                            className="flex-grow"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                          {item.hasNestedDropdown && (
                            <div
                              className="p-1 hover:bg-gray-200 rounded"
                              onClick={(e) => toggleMobileNestedDropdown(item.path, e)}
                            >
                              <svg
                                className={`h-4 w-4 transition-transform ${
                                  openMobileNestedDropdown === item.path ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Nested Dropdown */}
                        {item.hasNestedDropdown &&
                          item.nestedItems &&
                          openMobileNestedDropdown === item.path && (
                            <div className="bg-gray-100">
                              {item.nestedItems.map((nestedItem) => (
                                <Link
                                  key={nestedItem.path}
                                  href={nestedItem.path}
                                  className={`block px-12 py-2 text-sm border-l-4 ${
                                    pathname === nestedItem.path
                                      ? 'border-blue-600 text-blue-700 bg-blue-50'
                                      : 'border-transparent text-gray-600 hover:bg-gray-200 hover:border-gray-300'
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {nestedItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Register Button */}
          <div className="p-4 border-t">
            <Link
              href="/register-page"
              className="block w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;