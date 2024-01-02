import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import usePlanets from '@/utils/hooks/usePlanets';
import { formatThousands } from '@/utils/formatter';
import PlanetWithName from '@/components/PlanetWithName';
import Link from 'next/link';
import { getIdFromUrl } from '@/utils/formatter';
import textureGen from '@/utils/textureGen';
import GlassContainer from '@/components/GlassContainer';
import Section from '@/components/Section';
import useWishlist from '@/utils/hooks/useWishlist';

const WishlistPage: NextPage = () => {
  const { wishlist } = useWishlist('');

  return (
    <Section>
      <div className="h-full pb-10 grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-10 overflow-y-scroll">
        {wishlist.length > 0 ? (
          wishlist?.map((planet, i) => (
            <Link href={`/planet/${getIdFromUrl(planet.url)}`} key={i} passHref>
              <GlassContainer className="w-full aspect-square p-10 grid place-content-center">
                <PlanetWithName
                  texture={textureGen(getIdFromUrl(planet.url))}
                  className="w-40 md:w-60"
                  name={planet.name}
                  diameter={formatThousands(planet.diameter)}
                />
              </GlassContainer>
            </Link>
          ))
        ) : (
          <GlassContainer className="w-full aspect-square p-10 grid place-content-center">
            <p className="md:text-xl font-bold text-gray-500">No Wishlist</p>
          </GlassContainer>
        )}
      </div>
    </Section>
  );
};

export default WishlistPage;
