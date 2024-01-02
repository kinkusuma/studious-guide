import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function GlassContainer({ className, children }: Props) {
  return (
    <div
      className={clsx([
        'border border-gray-600 backdrop-blur-sm bg-slate-700/10 hover:bg-slate-700/30 rounded',
        className
      ])}
    >
      {children}
    </div>
  );
}
