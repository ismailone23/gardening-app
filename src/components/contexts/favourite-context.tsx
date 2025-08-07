import {
  cartData as initialCart,
  favouriteList as initialFavourites,
} from "@/constants/data";
import { generateShortId } from "@/utils";
import React, { createContext, useCallback, useContext, useState } from "react";

type Favourite = {
  id: string;
  plantId: string;
};
type Cart = {
  id: string;
  plantId: string;
  quantity: number;
};
type FavouriteContextType = {
  favourites: Favourite[];
  cart: Cart[];
  toggleFavourite: (plantId: string) => void;
  isFavourite: (plantId: string) => boolean;
  handleCart: (id: string, sign: "+" | "-") => void;
  handleAddtoCart: (id: string) => void;
};

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);

export const FavouriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Favourite[]>(initialFavourites);
  const [cart, setCart] = useState<Cart[]>(initialCart);

  const toggleFavourite = useCallback((plantId: string) => {
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
  }, []);

  const handleAddtoCart = useCallback((id: string) => {
    setCart((prev) => {
      const isExists = prev.some((data) => data.plantId === id);

      if (isExists) {
        return prev.map((data) =>
          data.plantId === id ? { ...data, quantity: data.quantity + 1 } : data
        );
      }
      return [...prev, { id: generateShortId(), plantId: id, quantity: 1 }];
    });
  }, []);

  const handleCart = useCallback((id: string, sign: "+" | "-") => {
    setCart((prev) => {
      const isExists = prev.find((data) => data.id === id);
      if (isExists && isExists.quantity === 1 && sign === "-") {
        return prev.filter((data) => data.id !== id);
      }
      return prev.map((data) => {
        if (sign === "+") {
          if (data.id === id) {
            return { ...data, quantity: data.quantity + 1 };
          }
          return data;
        } else {
          if (data.id === id) {
            return { ...data, quantity: data.quantity - 1 };
          }
          return data;
        }
      });
    });
  }, []);

  const isFavourite = (plantId: string) =>
    favourites.some((fav) => fav.plantId === plantId);

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
        cart,
        handleCart,
        handleAddtoCart,
      }}
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
