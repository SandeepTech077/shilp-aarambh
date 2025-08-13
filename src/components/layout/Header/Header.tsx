import Link from 'next/link';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm px-4 lg:px-16">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
        <Image src="/Logo.svg" alt="logo" width={90} height={40} />

        </Link>
        <div className='mr-25'>
        <Image src="/SVG/logo2.svg" alt='logo' width={50} height={50}/>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;