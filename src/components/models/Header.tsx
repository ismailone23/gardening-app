import { categories, plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { usePathname, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const pathname = usePathname();

  const path = pathname.replace("/models/", "").replace("-", " ");
  const heading = useMemo(() => {
    if (path.includes("/")) {
      if (path.includes("categories")) {
        return categories.find((cat) => cat.id === path.split("/")[1])?.title;
      } else {
        return plants.find((plant) => plant.id === path.split("/")[1])?.name;
      }
    } else {
      return path;
    }
  }, [path]);
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.back();
  }, [router]);
  const colors = useThemeColor();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="w-full"
    >
      <View className="w-full px-5 flex-row items-center relative">
        <TouchableOpacity
          className="absolute z-10 top-1 left-5"
          onPress={handlePress}
        >
          <ArrowLeft size={25} color={colors.text} />
        </TouchableOpacity>
        <Text
          style={{ color: colors.text }}
          className="text-2xl font-semibold capitalize w-full text-center"
        >
          {heading}
        </Text>
      </View>
    </SafeAreaView>
  );
}
