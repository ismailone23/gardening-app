import { useThemeColor } from "@/hooks/useThemeColor";
import { formatDate } from "@/utils";
import React from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";

export default function Offer({
  link,
  id,
  discount,
  until,
}: {
  link?: string;
  id: string;
  discount: number;
  until: string;
}) {
  const { width } = useWindowDimensions();
  const safeWidth = width - 2 * 20;
  const colors = useThemeColor();

  return (
    <View
      style={{ width: safeWidth / 2, backgroundColor: colors.inputField }}
      className="py-6 justify-between pr-4 items-start flex rounded-lg flex-row "
    >
      <View>
        <Image
          source={{ uri: link }}
          accessibilityLabel="offer_plant"
          style={{ width: 80, height: 80, resizeMode: "contain" }}
        />
      </View>
      <View className="flex flex-col justify-between items-end">
        <View className="flex flex-col items-end">
          <Text style={{ color: colors.text }}>{discount}%</Text>
          <Text style={{ color: colors.text }} className="text-sm">
            discount
          </Text>
        </View>
        <View className="flex items-end">
          <Text style={{ color: colors.text }} className="text-sm">
            Get discount until
          </Text>
          <Text style={{ color: colors.text }} className="text-sm">
            {formatDate(until)}
          </Text>
        </View>
      </View>
    </View>
  );
}
