import { tintColorLight } from "@/constants/Colors";
import { plants, specialOffers } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useLocalSearchParams } from "expo-router";
import { Droplet, Leaf, Sun } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Plant() {
  const { id } = useLocalSearchParams();

  const plantData = plants.find((plant) => plant.id === id);

  const { width } = useWindowDimensions();

  const [height, setHeight] = useState(0);

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
  const discount = specialOffers.find(
    (offer) => offer.plantId === plantData.id
  );

  return (
    <ScrollView
      className="w-full h-full"
      style={{ backgroundColor: colors.background }}
    >
      <SafeAreaView edges={["bottom"]}>
        <View className="w-full flex items-start gap-y-5">
          <View className="w-full">
            <Image
              source={{ uri: plantData.image[0] }}
              accessibilityLabel="offer_plant"
              style={{ width, height, resizeMode: "contain" }}
            />
          </View>
          <View className="px-5 w-full gap-y-2">
            <View className="flex items-start">
              <Text
                style={{ color: colors.text }}
                className="text-lg font-medium capitalize"
              >
                {plantData.name}
              </Text>
              <Text
                className="text-lg font-medium capitalize"
                style={{ color: tintColorLight }}
              >
                {plantData.price} BDT
              </Text>
              {discount && (
                <Text
                  style={{ color: colors.text }}
                  className="text-lg font-medium capitalize"
                >
                  Discount Price:{" "}
                  {plantData.price -
                    plantData.price * (discount.discount / 100)}{" "}
                  BDT
                </Text>
              )}
              <Text
                style={{ color: colors.inputText }}
                className="font-medium text-gray-700 capitalize"
              >
                scientific name: {plantData.name}
              </Text>
            </View>
            <View
              style={{ backgroundColor: colors.inputField }}
              className="rounded-lg flex p-5 justify-around flex-row"
            >
              <Pressable className="flex items-center">
                <Droplet size={25} color={tintColorLight} />
                <View className="flex items-center">
                  <Text style={{ color: colors.text }} className="font-medium">
                    Water
                  </Text>
                  <Text style={{ color: colors.text }} className="text-sm">
                    {plantData.waterNeeded}
                  </Text>
                </View>
              </Pressable>
              <Pressable className="flex items-center">
                <Leaf size={25} color={tintColorLight} />
                <View className="flex items-center">
                  <Text style={{ color: colors.text }} className="font-medium">
                    Fertilizer
                  </Text>
                  <Text style={{ color: colors.text }} className="text-sm">
                    {plantData.fertilizerNeeded}
                  </Text>
                </View>
              </Pressable>
              <Pressable className="flex items-center">
                <Sun size={25} color={tintColorLight} />
                <View className="flex items-center">
                  <Text style={{ color: colors.text }} className="font-medium">
                    Sunlight
                  </Text>
                  <Text style={{ color: colors.text }} className="text-sm">
                    {plantData.sunlight}
                  </Text>
                </View>
              </Pressable>
            </View>
            <Text
              style={{ lineHeight: 20, letterSpacing: 0.3, color: colors.text }}
            >
              {plantData.description}
            </Text>
          </View>
          <View className="flex flex-row w-full">
            <TouchableOpacity
              style={{ backgroundColor: tintColorLight, opacity: 0.7 }}
              className="flex-1 py-5 items-center"
            >
              <Text className="capitalize text-white text-lg">add to cart</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ backgroundColor: tintColorLight }}
              className="flex-1 py-5 items-center"
            >
              <Text className="capitalize text-white text-lg">buy now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
