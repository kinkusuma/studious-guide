import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import usePlanets from '@/utils/hooks/usePlanets';
import { formatThousands } from '@/utils/formatter';
import PlanetWithName from '@/components/PlanetWithName';
import Link from 'next/link';
import { getIdFromUrl } from '@/utils/formatter';
import textureGen from '@/utils/textureGen';
import Section from '@/components/Section';
import GlassContainer from '@/components/GlassContainer';

const PlanetListPage: NextPage = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = usePlanets();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <Section>
      {status === 'error' ? (
        <div className="w-full h-full flex items-center justify-center text-red-300">
          <p className="font-bold xl:text-2xl">Something Went Error</p>
        </div>
      ) : (
        <div className="h-full pb-10 grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-10 overflow-y-scroll">
          {data?.pages.map((group, i) =>
            group.results.map((planet, j) => (
              <Link href={`/planet/${getIdFromUrl(planet.url)}`} key={`${i}-${j}`} passHref>
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
          )}
          <div className="w-full h-full" ref={ref}>
            {isFetchingNextPage || status === 'pending' ? (
              <GlassContainer className="w-full aspect-square p-10 grid place-content-center">
                <p className="md:text-xl font-bold text-gray-500">Loading...</p>
              </GlassContainer>
            ) : hasNextPage ? (
              <GlassContainer className="w-full aspect-square p-10 grid place-content-center">
                <p className="md:text-xl font-bold text-gray-500">Load More</p>
              </GlassContainer>
            ) : null}
          </div>
        </div>
      )}
    </Section>
  );
};

export default PlanetListPage;
