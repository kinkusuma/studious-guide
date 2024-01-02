import clsx from 'clsx';
import React from 'react';
import type { HTMLAttributes } from 'react';

export default function ScreenBezel({
  children,
  className,
  ...attr
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx([
        'w-full h-20 border-b border-gray-50/50 rounded-[50%] bg-gradient-to-b from-transparent to-sky-800/20',
        className
      ])}
      {...attr}
    >
      {children}
    </div>
  );
}
