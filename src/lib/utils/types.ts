/* eslint-disable @typescript-eslint/consistent-type-definitions */
export type RootStackParamList = {
  Categories: undefined;
  Meals: { categoryId: string };
  Meal: { id: string };
};

export type FavoriteStackList = {
  FavoriteMeals: undefined;
  Meal: { id: string };
};
