import Plant from "@/components/home/Plant";
import { categories, plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CategoryList() {
  const { id } = useLocalSearchParams();

  const category = categories.find((category) => category.id === id);
  const colors = useThemeColor();

  const { width } = useWindowDimensions();
  const safeWidth = width - 2 * 20;
  if (!category) {
    return (
      <View className="w-full h-full flex items-center justify-center">
        <Text>No data Found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      className="w-full h-full"
    >
      <SafeAreaView edges={["bottom"]}>
        <View className="w-full flex flex-row flex-wrap px-5 gap-y-2 justify-between">
          {plants
            .filter((plant) => plant.categoryId === category.id)
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
      </SafeAreaView>
    </ScrollView>
  );
}
