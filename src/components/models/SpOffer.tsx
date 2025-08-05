import { tintColorLight } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Plus } from "lucide-react-native";
import React, { useCallback } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function SpOffer({
  id,
  link,
  name,
  price,
  discount,
  safeWidth,
}: {
  id: string;
  link?: string;
  name?: string;
  price?: number;
  discount: number;
  safeWidth: number;
}) {
  const router = useRouter();

  const handlePress = useCallback(
    (path: string) => {
      router.push({ pathname: "/models/plant/[id]", params: { id: path } });
    },
    [router]
  );
  const colors = useThemeColor();

  return (
    <Pressable
      className="flex flex-col justify-between overflow-hidden items-end rounded-lg"
      style={{ width: safeWidth, backgroundColor: colors.inputField }}
      onPress={() => handlePress(id)}
    >
      <View className="w-full">
        <Image
          source={{ uri: link }}
          accessibilityLabel="offer_plant"
          style={{ width: safeWidth, height: safeWidth, resizeMode: "cover" }}
        />
      </View>
      <View className="w-full flex items-center">
        <Text style={{ color: colors.text }} className="text-lg">
          {name}
        </Text>
        <Text style={{ color: colors.text }} className="line-through text-sm">
          {price}
        </Text>
        <Text style={{ color: tintColorLight }} className="font-medium">
          {price && price - price * (discount / 100)}
        </Text>
      </View>
      <Pressable style={{ backgroundColor: tintColorLight }} className="p-2">
        <Plus size={20} color={"#fff"} />
      </Pressable>
    </Pressable>
  );
}
