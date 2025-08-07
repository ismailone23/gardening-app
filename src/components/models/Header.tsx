import { tintColorDark } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Heart } from "lucide-react-native";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFavourite } from "../contexts/favourite-context";

export default function Header() {
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.back();
  }, [router]);
  const colors = useThemeColor();
  const { id } = useLocalSearchParams();
  const { isFavourite, toggleFavourite } = useFavourite();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="w-full"
    >
      <View className="flex w-full flex-row justify-between items-center px-5">
        <TouchableOpacity
          onPress={handlePress}
          className="p-3 rounded-full border-2 border-gray-200"
        >
          <ArrowLeft size={22} color={"#4b5563"} />
        </TouchableOpacity>
        <Text
          style={{ color: colors.text }}
          className="text-2xl font-semibold capitalize text-center"
        >
          Details
        </Text>
        <TouchableOpacity
          onPress={() => toggleFavourite(String(id))}
          className="p-3 rounded-full border-2 border-gray-200"
        >
          <Heart
            size={22}
            color={isFavourite(String(id)) ? tintColorDark : "#4b5563"}
            fill={isFavourite(String(id)) ? tintColorDark : "#fff"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
