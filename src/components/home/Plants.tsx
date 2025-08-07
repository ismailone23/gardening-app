import { plants } from "@/constants/data";
import React, { useMemo } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Plant from "./Plant";

export default function Plants({ selected }: { selected: number }) {
  const { width } = useWindowDimensions();
  const safeWidth = width - 2 * 20;
  // const colors = useThemeColor();

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) =>
      selected === 0 ? plant : Number(plant.categoryId) === selected
    );
  }, [selected]);

  return (
    <View className="w-full flex flex-col gap-y-2">
      <View className="w-full flex flex-row flex-wrap gap-y-2 justify-between">
        {filteredPlants.length < 1 ? (
          <View className="w-full flex items-start">
            <Text
              style={{ fontFamily: "Nunito-Medium", fontSize: 16 }}
              className="text-gray-400 italic"
            >
              This Category Plant is Currently Unavailable
            </Text>
          </View>
        ) : (
          filteredPlants.map(({ id: plantId, name, price, image }, j) => (
            <Plant
              key={j}
              image={image[0]}
              id={plantId}
              safeWidth={safeWidth / 2}
            />
          ))
        )}
      </View>
    </View>
  );
}
