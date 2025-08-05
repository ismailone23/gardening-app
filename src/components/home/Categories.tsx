import { categories } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import React, { useCallback, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Category from "./Category";

export default function Categories() {
  const [selected, setSelected] = useState(categories[0].id);

  const handlePress = useCallback((id: string) => {
    setSelected(id);
  }, []);

  const { width } = useWindowDimensions();
  const safeWidth = width - 4 * 20;
  const colors = useThemeColor();
  return (
    <View className="w-full gap-y-2 justify-between flex flex-col">
      <View className="w-full justify-between items-center flex flex-row">
        <Text style={{ color: colors.text }} className="text-xl font-medium">
          Categories
        </Text>
        <Link href={"/models/categories"}>
          <Text
            style={{ color: colors.inputText }}
            className="text-sm font-medium"
          >
            See all
          </Text>
        </Link>
      </View>

      <View className="w-full justify-between flex flex-row">
        {categories.slice(0, 4).map(({ title, icon: Icon, id }, i) => (
          <Category
            key={id}
            safeWidth={safeWidth / 4}
            Icon={Icon}
            selected={selected}
            handlePress={handlePress}
            id={id}
            title={title}
          />
        ))}
      </View>
    </View>
  );
}
