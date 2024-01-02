import type { NextPage } from 'next';
import React, { useRef } from 'react';
import usePlanetDetail from '@/utils/hooks/usePlanetDetail';
import { useRouter } from 'next/router';
import usePeoplesDetail from '@/utils/hooks/usePeoplesDetail';
import { formatThousands, getIdFromUrl } from '@/utils/formatter';
import PlanetWithName from '@/components/PlanetWithName';
import { formatDatetime } from '@/utils/formatter';
import textureGen from '@/utils/textureGen';
import Section from '@/components/Section';
import GlassContainer from '@/components/GlassContainer';
import useWishlist from '@/utils/hooks/useWishlist';

const PlanetDetailPage: NextPage = () => {
  const router = useRouter();
  const { data, status } = usePlanetDetail({ id: router.query.id as string });
  const { data: peoples } = usePeoplesDetail({
    ids: data?.residents.map((url) => getIdFromUrl(url)) || [],
    options: { enabled: status === 'success' && data?.residents.length > 0 }
  });

  const { isWishlist, addWishlist, removeWishlist } = useWishlist(data?.url || '');

  const handleWishlist = () => {
    if (isWishlist) {
      removeWishlist();
    } else {
      addWishlist({
        name: data?.name || '',
        url: data?.url || '',
        diameter: data?.diameter || ''
      });
    }
  };

  return (
    <Section>
      {status === 'pending' ? (
        <div className="w-full h-full flex items-center justify-center text-white">
          <p className="font-bold xl:text-2xl">Loading...</p>
        </div>
      ) : status === 'error' ? (
        <div className="w-full h-full p-10 flex items-center justify-center text-red-300">
          <p className="font-bold xl:text-2xl">Something Went Error</p>
        </div>
      ) : (
        <div className="h-full pb-32 xl:pb-10 grid xl:grid-cols-2 gap-10 xl:gap-0 place-items-center overflow-y-scroll">
          <PlanetWithName
            texture={textureGen(router.query.id as string)}
            className="w-60 xl:w-[70%] mt-10 xl:mt-0"
            name={data?.name || ''}
            diameter={data?.diameter || '0'}
          />

          <div className="w-full grid xl:grid-cols-2 gap-2">
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white">
              <p className="text-base">Rotation Period</p>
              <p className="text-sm font-bold">{data?.rotation_period} Hours</p>
            </GlassContainer>
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white">
              <p className="text-base">Orbital Period</p>
              <p className="text-sm font-bold">{data?.orbital_period} Days</p>
            </GlassContainer>
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white">
              <p className="text-base">Gravity</p>
              <p className="text-sm font-bold">{data?.gravity}</p>
            </GlassContainer>
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white">
              <p className="text-base">Population</p>
              <p className="text-sm font-bold">{formatThousands(data?.population)}</p>
            </GlassContainer>
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white xl:col-span-2">
              <p className="text-base">Peoples:</p>
              <ul className="pl-5 list-disc text-sm font-bold grid xl:grid-cols-2">
                {peoples?.map((people, i) => (
                  <li key={i}>{people?.name}</li>
                ))}
              </ul>
            </GlassContainer>
            <GlassContainer className="px-5 py-2 flex flex-col gap-1 text-white xl:col-span-2">
              <p className="text-xs">{formatDatetime(data?.created || '')}</p>
            </GlassContainer>

            <button onClick={handleWishlist}>
              <GlassContainer className="mt-5 py-2 flex items-center justify-center text-white">
                <p>{isWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</p>
              </GlassContainer>
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default PlanetDetailPage;
