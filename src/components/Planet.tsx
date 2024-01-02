import clsx from 'clsx';
import React from 'react';

type Props = {
  texture: string;
  className: string;
  children?: React.ReactNode;
};

export default function Planet({ texture, className, children }: Props) {
  return (
    <div className={clsx([className, 'aspect-square relative text-white'])}>
      <div
        className="w-full aspect-square absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0 rounded-full animate-planet-rotate bg-cover bg-gray-500"
        style={{ backgroundImage: `url(${texture})` }}
      ></div>
      <div className="w-full aspect-square absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 rounded-full bg-gradient-to-tl from-transparent to-gray-900 shadow-xl shadow-gray-500/50 rotate-180"></div>

      <div className="w-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 flex flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
}
