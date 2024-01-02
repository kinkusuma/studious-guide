import BgImgContainer from '@/components/BgImgContainer';
import GlassContainer from '@/components/GlassContainer';
import Navbar from '@/components/NavBar';
import Section from '@/components/Section';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Section backroundImg="/assets/sky/SkyboxBackdrop39.png">
      <div className="w-full h-full flex flex-col gap-5 justify-center text-white">
        <h1 className="md:text-5xl font-black">Unveiling the Mysteries of Star Wars Planets</h1>
        <p className="text-xs md:text-base md:w-1/2">
          Explore a galaxy far, far away with our comprehensive Star Wars Planet List. Discover the
          unique landscapes, inhabitants, and histories of each celestial body. From the iconic
          Tatooine to the mysterious Dagobah, embark on a journey through the Star Wars universe
          like never before. May the Force guide you on your exploration!
        </p>

        <Link className="w-fit" href={`/planet`} passHref>
          <GlassContainer className="w-fit text-xs md:text-base p-3 md:px-5">
            Explore Planet
          </GlassContainer>
        </Link>
      </div>
    </Section>
  );
};

export default Home;
