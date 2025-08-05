import { favouriteList } from "@/constants/data";

export const toggleFavourite = (plantId: string) => {
  const isFav = favouriteList.some((fav) => fav.plantId === plantId);
  if (isFav) {
    return favouriteList.filter((fav) => fav.plantId !== plantId);
  } else {
    return [
      ...favouriteList,
      {
        id: "favourite_" + Math.random() * 10 + "a" + Math.random() * 10 + "b",
      },
    ];
  }
};
