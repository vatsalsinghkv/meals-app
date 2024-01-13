import React, { createContext, useState } from 'react';

import type Meal from '../../models/meal';

const initialState = {
  favorites: [] as Meal[],
  add: (meal: Meal) => {},
  remove: (id: string) => {},
};

export const FavoritesContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

export default function FavoriteProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  const add = (meal: Meal) => {
    setFavorites((prev) => [...prev, meal]);
  };

  const remove = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        add,
        remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
