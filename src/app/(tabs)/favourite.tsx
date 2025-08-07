import { useFavourite } from "@/components/contexts/favourite-context";
import Plant from "@/components/home/Plant";
import { plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useMemo } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favourite() {
  const { width } = useWindowDimensions();
  const safeWidth = width - 2 * 20;
  const { favourites } = useFavourite();
  const colors = useThemeColor();

  const favouritePlant = useMemo(() => {
    const fplants = plants.filter((plant) =>
      favourites.some((fav) => fav.plantId === plant.id)
    );

    if (fplants.length > 0) {
      return fplants;
    }
    return [];
  }, [favourites]);

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      edges={["top", "bottom"]}
    >
      <ScrollView
        className="w-full h-full"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="flex flex-col w-full">
          <Text
            style={{
              color: colors.text,
              fontFamily: "Roboto-Bold",
              fontSize: 22,
            }}
            className="py-5 text-center"
          >
            Favourites
          </Text>
          <View className="w-full flex flex-row flex-wrap px-5 gap-y-2 justify-between">
            {favouritePlant.map(({ id: plantId, name, price, image }, j) => (
              <Plant
                key={j}
                image={image[0]}
                id={plantId}
                name={name}
                price={price}
                safeWidth={safeWidth / 2}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
