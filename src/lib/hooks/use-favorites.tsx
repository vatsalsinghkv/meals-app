import { useContext } from 'react';

import { FavoritesContext } from '../context/favorites-context';

function useFavorites() {
  return useContext(FavoritesContext);
}

export default useFavorites;
