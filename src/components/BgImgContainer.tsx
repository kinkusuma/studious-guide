import Image from 'next/image';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  src: string;
};

export default function BgImgContainer({ children, src }: Props) {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Image
        className="absolute top-0 left-0 object-cover object-center transform -scale-x-100 -z-10"
        src={src}
        alt="background"
        fill
      />
      {children}
    </div>
  );
}
