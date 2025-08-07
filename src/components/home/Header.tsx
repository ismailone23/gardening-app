import { useThemeColor } from "@/hooks/useThemeColor";
import { Search } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Header() {
  const colors = useThemeColor();
  return (
    <View className="flex flex-row justify-between items-center w-full">
      <View className="flex flex-col">
        <Text
          style={{
            color: colors.text,
            fontSize: 28,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          Find your
        </Text>
        <Text
          style={{
            color: colors.text,
            fontSize: 26,
            fontFamily: "Nunito-SemiBold",
          }}
        >
          favourite plant
        </Text>
      </View>
      <Pressable
        className="border-2 py-3 rounded-full px-2"
        style={{ borderColor: colors.border }}
      >
        <Search size={25} color={"#6b7280"} />
      </Pressable>
    </View>
  );
}
