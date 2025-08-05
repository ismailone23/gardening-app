import Category from "@/components/home/Category";
import { categories } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useCallback, useState } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

export default function Categories() {
  const { width } = useWindowDimensions();
  const safeWidth = width - 4 * 20;
  const [selected, setSelected] = useState(categories[0].id);

  const handlePress = useCallback((id: string) => {
    setSelected(id);
  }, []);
  const colors = useThemeColor();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      className="w-full h-full"
    >
      <View
        style={{ backgroundColor: colors.background }}
        className="w-full h-full px-5"
      >
        <View className="w-full gap-y-6 mt-5 justify-between flex flex-wrap flex-row">
          {categories.map(({ title, icon: Icon, id }, i) => (
            <Category
              key={id}
              safeWidth={safeWidth / 3}
              Icon={Icon}
              selected={selected}
              handlePress={handlePress}
              id={id}
              title={title}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
