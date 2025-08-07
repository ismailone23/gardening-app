import { categories } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Categories({
  handlePress,
  selected,
}: {
  selected: number;
  handlePress: (id: number) => void;
}) {
  const colors = useThemeColor();
  return (
    <View className="w-full flex">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 8,
        }}
        className="flex-row"
      >
        {categories.map(({ name, id }) => (
          <Pressable
            key={id}
            onPress={() => handlePress(id)}
            style={{
              borderColor: selected === id ? "#71717a" : "#e5e7eb",
            }}
            className={`px-5 py-2 border-2 rounded-full`}
          >
            <Text
              style={{
                color: selected === id ? colors.text : "#3f3f46",
                fontWeight: "500",
                fontFamily: "Nunito-Medium",
                fontSize: 14,
              }}
              className="flex-1"
            >
              {name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
