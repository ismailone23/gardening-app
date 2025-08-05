import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Header() {
  const colors = useThemeColor();
  return (
    <View className="flex flex-row justify-between w-full">
      <View className="flex flex-col ">
        <Text style={{ color: colors.text }} className="text-2xl font-semibold">
          Hello!
        </Text>
        <Text style={{ color: colors.text }}>
          Start contributing to nature from today
        </Text>
      </View>
      <View className="w-14 overflow-hidden rounded-full h-14">
        <Image
          source={require("../../../assets/images/model.jpg")}
          className="w-full h-full object-conver rounded-full"
          alt="model"
        />
      </View>
    </View>
  );
}
