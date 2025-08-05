import { tintColorLight } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Heart, Plus } from "lucide-react-native";
import React, { useCallback } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useFavourite } from "../contexts/favourite-context";

export default function Plant({
  id,
  name,
  image,
  price,
  safeWidth,
}: {
  id: string;
  name: string;
  image: string;
  price: number;
  safeWidth: number;
}) {
  const router = useRouter();

  const handlePress = useCallback(
    (path: string) => {
      router.push({ pathname: "/models/plant/[id]", params: { id: path } });
    },
    [router]
  );
  const { toggleFavourite, isFavourite } = useFavourite();
  const colors = useThemeColor();

  return (
    <Pressable
      className="flex flex-col relative justify-between overflow-hidden items-end rounded-lg"
      style={{ width: safeWidth, backgroundColor: colors.categoryColor }}
      onPress={() => handlePress(id)}
    >
      <Pressable
        onPress={() => toggleFavourite(id)}
        className="absolute bg-white left-2 top-2 p-2 rounded-full z-10"
      >
        <Heart
          size={20}
          color={"#f43f5e"}
          fill={isFavourite(id) ? "#f43f5e" : "#fff"}
        />
      </Pressable>
      <View className="w-full">
        <Image
          source={{ uri: image }}
          accessibilityLabel="offer_plant"
          style={{ width: safeWidth, height: safeWidth, resizeMode: "cover" }}
        />
      </View>
      <View className="w-full flex items-center mt-2">
        <Text style={{ color: colors.text }} className="text-lg">
          {name}
        </Text>
        <Text style={{ color: colors.text }} className="text-sm">
          {price}
        </Text>
      </View>
      <Pressable style={{ backgroundColor: tintColorLight }} className="p-2">
        <Plus size={20} color={"#fff"} />
      </Pressable>
    </Pressable>
  );
}
