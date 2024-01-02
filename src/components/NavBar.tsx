import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-fit p-5 md:p-10 flex flex-wrap gap-3 justify-between fixed">
      <div className="w-full md:w-fit flex items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={75} height={75} />
      </div>
      <div className="w-full md:w-fit flex items-center justify-between md:justify-end gap-10 text-xs text-white md:text-base">
        <Link href="/">Home</Link>
        <Link href="/planet">Explore</Link>
        <Link href="/wishlist">Wishlist</Link>
      </div>
    </div>
  );
}
