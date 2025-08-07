import { favouriteList as initialFavourites } from "@/constants/data";
import { generateShortId } from "@/utils";
import React, { createContext, useContext, useState } from "react";

type Favourite = {
  id: string;
  plantId: string;
};

type FavouriteContextType = {
  favourites: Favourite[];
  toggleFavourite: (plantId: string) => void;
  isFavourite: (plantId: string) => boolean;
};

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

export const FavouriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Favourite[]>(initialFavourites);

  const toggleFavourite = (plantId: string) => {
    setFavourites((prev) => {
      const isFav = prev.some((fav) => fav.plantId === plantId);
      if (isFav) {
        return prev.filter((fav) => fav.plantId !== plantId);
      } else {
        return [
          ...prev,
          {
            plantId,
            id: generateShortId(),
          },
        ];
      }
    });
  };

  const isFavourite = (plantId: string) =>
    favourites.some((fav) => fav.plantId === plantId);

  return (
    <FavouriteContext.Provider
      value={{ favourites, toggleFavourite, isFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourite must be used within FavouriteProvider");
  }
  return context;
};
