import React from 'react';
import BgImgContainer from './BgImgContainer';
import Navbar from './NavBar';

type Props = {
  children?: React.ReactNode;
  backroundImg?: string;
};

export default function Section({ children, backroundImg = '/assets/sky2.jpg' }: Props) {
  return (
    <BgImgContainer src={backroundImg}>
      <Navbar />

      <div className="w-full h-full p-5 md:p-10 pt-0 mt-28 md:mt-16">{children}</div>
    </BgImgContainer>
  );
}
