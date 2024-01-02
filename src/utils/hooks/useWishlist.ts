import { useEffect, useState } from 'react';
import { PlanetResponse } from '@/types/responses';

type SavedPlanet = Pick<PlanetResponse, 'name' | 'url' | 'diameter'>;

const useWishlist = (url: string) => {
  const [wishlistState, setWishlistState] = useState<SavedPlanet[]>([]);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  const addWishlist = (planet: SavedPlanet) => {
    setWishlistState([...wishlistState, planet]);
  };

  const removeWishlist = () => {
    setWishlistState(wishlistState.filter((planet) => planet.url !== url));
  };

  useEffect(() => {
    const wishlist: SavedPlanet[] = JSON.parse(localStorage.getItem('WISHLIST') || '[]');
    setWishlistState(wishlist);
    if (url !== '') {
      setIsWishlist(wishlist.some((planet) => planet.url === url));
    }
  }, [url]);

  useEffect(() => {
    if (wishlistState.length > 0) {
      localStorage.setItem('WISHLIST', JSON.stringify(wishlistState));
      setIsWishlist(wishlistState.some((planet) => planet.url === url));
    }
  }, [wishlistState, url]);

  return { wishlist: wishlistState, isWishlist, addWishlist, removeWishlist };
};

export default useWishlist;
