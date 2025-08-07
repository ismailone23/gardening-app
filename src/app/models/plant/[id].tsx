import { useFavourite } from "@/components/contexts/favourite-context";
import { tintColorLight } from "@/constants/Colors";
import { plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Star } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Plant() {
  const { id } = useLocalSearchParams();

  const plantData = plants.find((plant) => plant.id === id);

  const { width } = useWindowDimensions();
  const { handleAddtoCart } = useFavourite();
  const [height, setHeight] = useState(0);
  const [collapsed, setCollapsed] = useState(true);

  const colors = useThemeColor();
  useEffect(() => {
    plantData?.image &&
      Image.getSize(plantData.image[0], (imgWidth, imgHeight) => {
        const ratio = imgHeight / imgWidth;
        setHeight(width * ratio);
      });
  }, [plantData, width]);

  if (!plantData) {
    return (
      <View className="flex w-full h-full items-center justify-center">
        <Text>Not Found</Text>
      </View>
    );
  }
  const MAX_CHARS = 180;

  const truncatedText =
    plantData.data.length > MAX_CHARS
      ? plantData.data.slice(0, MAX_CHARS).trim() + "..."
      : plantData.data;

  return (
    <ScrollView
      className="w-full h-full"
      style={{ backgroundColor: colors.background }}
    >
      <SafeAreaView edges={["bottom"]}>
        <View className="w-full flex flex-col">
          <View>
            <Image
              style={{ width, height }}
              accessibilityLabel={`plant_${plantData.name}`}
              source={{ uri: plantData.image[0] }}
            />
          </View>
          <View className="w-full gap-y-5 mt-5 px-5 flex">
            <View className="w-full items-center flex-row flex-wrap flex justify-between">
              <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
                {plantData.name}
              </Text>
              <Pressable className="flex flex-row items-center gap-x-2">
                <Star size={22} color={tintColorLight} fill={tintColorLight} />
                <View className="gap-x-1 flex flex-row items-center">
                  <Text style={{ fontFamily: "Nunito-SemiBold" }}>4.8</Text>
                  <Text>(268 Reviews)</Text>
                </View>
              </Pressable>
            </View>
            <View className="flex gap-y-2">
              <View>
                <Text
                  onPress={() => setCollapsed((p) => !p)}
                  style={{
                    fontFamily: "Nunito-Regular",
                    fontSize: 16,
                    lineHeight: 22,
                    color: "#000",
                  }}
                >
                  {collapsed ? (
                    <>
                      {truncatedText}
                      <Text style={{ color: tintColorLight }}> See more</Text>
                    </>
                  ) : (
                    <>
                      {plantData.data}
                      <Text style={{ color: tintColorLight }}> See less</Text>
                    </>
                  )}
                </Text>
              </View>
              <View className="w-full flex mt-5 flex-row justify-between">
                <View className="flex gap-y-1">
                  <Text
                    style={{
                      fontFamily: "Nunito-Medium",
                      fontSize: 14,
                    }}
                    className="text-gray-600"
                  >
                    Size
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito-SemiBold",
                      fontSize: 16,
                    }}
                    className="capitalize"
                  >
                    {plantData.size}
                  </Text>
                </View>
                <View className="flex gap-y-1">
                  <Text
                    style={{
                      fontFamily: "Nunito-Medium",
                      fontSize: 14,
                    }}
                    className="text-gray-600"
                  >
                    Plant
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito-SemiBold",
                      fontSize: 16,
                    }}
                    className="capitalize"
                  >
                    {plantData.plant.split(" ")[0]}
                  </Text>
                </View>
                <View className="flex gap-y-1">
                  <Text
                    style={{
                      fontFamily: "Nunito-Medium",
                      fontSize: 14,
                    }}
                    className="text-gray-600"
                  >
                    Humidity
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Nunito-SemiBold",
                      fontSize: 16,
                    }}
                  >
                    {plantData.humidity}%
                  </Text>
                </View>
              </View>
              <View className="flex mt-5 flex-row items-center justify-between">
                <View className="flex flex-col ">
                  <Text
                    style={{ fontFamily: "Nunito-Medium", fontSize: 14 }}
                    className="text-gray-600"
                  >
                    Price
                  </Text>
                  <Text style={{ fontFamily: "Nunito-SemiBold", fontSize: 18 }}>
                    ${plantData.price}
                  </Text>
                </View>
                <Pressable
                  style={{
                    backgroundColor: tintColorLight,
                  }}
                  onPress={() => handleAddtoCart(plantData.id)}
                  className="w-52 h-16 flex items-center justify-center rounded-full"
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Nunito-Bold",
                      color: "#fff",
                    }}
                  >
                    Add to Cart
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
