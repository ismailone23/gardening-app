import { categories, plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Plant from "./Plant";

export default function Plants() {
  const { width } = useWindowDimensions();
  const safeWidth = width - 2 * 20;
  const colors = useThemeColor();

  return (
    <View className="w-full flex flex-col gap-y-2">
      {categories
        .filter(
          (cat) =>
            plants.filter((plant) => plant.categoryId === cat.id).length > 0
        )
        .map(({ title, id }, i) => (
          <View className="flex gap-2 items-start flex-col" key={i}>
            <View className="flex w-full flex-row justify-between items-center">
              <Text
                style={{ color: colors.text }}
                className="text-xl font-roboto font-semibold"
              >
                {title}
              </Text>
              <Link
                style={{ color: colors.inputText }}
                href={{ pathname: "/models/categories/[id]", params: { id } }}
              >
                See all
              </Link>
            </View>
            <View className="w-full flex flex-row flex-wrap gap-y-2 justify-between">
              {plants
                .filter((plant) => plant.categoryId === id)
                .slice(0, 2)
                .map(({ id: plantId, name, price, image }, j) => (
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
        ))}
    </View>
  );
}
