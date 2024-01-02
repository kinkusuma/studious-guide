import clsx from 'clsx';
import React from 'react';
import type { HTMLAttributes } from 'react';

export default function SkySection({
  children,
  className,
  ...attr
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section className="w-full h-screen flex justify-center bg-[url('/assets/sky.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <div className={clsx(['w-full md:w-3/4 h-full', className])} {...attr}>
        {children}
      </div>
    </section>
  );
}
