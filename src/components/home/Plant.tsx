import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Heart } from "lucide-react-native";
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
      className="flex flex-col relative bg-gray-50 justify-between overflow-hidden items-end"
      style={{
        width: safeWidth,
        borderRadius: 25,
      }}
      onPress={() => handlePress(id)}
    >
      <Pressable
        style={{ bottom: 10, paddingHorizontal: 10 }}
        className="absolute flex flex-row w-full justify-between items-center z-10"
      >
        <Pressable
          style={{ backgroundColor: colors.background }}
          className="px-5 py-3 rounded-full"
        >
          <Text style={{ fontSize: 16, fontFamily: "Roboto-Medium" }}>
            Add to Cart
          </Text>
        </Pressable>
        <Pressable
          onPress={() => toggleFavourite(id)}
          style={{ backgroundColor: "#000" }}
          className="p-3 rounded-full"
        >
          <Heart
            size={23}
            color={"#fff"}
            fill={isFavourite(id) ? "#fff" : "#000"}
          />
        </Pressable>
      </Pressable>
      <View className="w-full">
        <Image
          source={{ uri: image }}
          accessibilityLabel="offer_plant"
          style={{
            width: safeWidth,
            height: safeWidth * 1.5,
            resizeMode: "cover",
          }}
        />
      </View>
    </Pressable>
  );
}
