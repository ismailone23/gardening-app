import SpOffer from "@/components/models/SpOffer";
import { plants, specialOffers } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SpecialOffers() {
  const { width } = useWindowDimensions();
  const safeWidth = width - 2.2 * 20;
  const colors = useThemeColor();

  return (
    <SafeAreaView edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        style={{ backgroundColor: colors.background }}
        className="w-full h-full"
      >
        <View className="w-full flex flex-wrap justify-between gap-y-2 flex-row px-5">
          {specialOffers.map(({ discount, plantId, id }) => (
            <SpOffer
              key={id}
              link={plants.find((plant) => plant.id === plantId)?.image[0]}
              discount={discount}
              id={plantId}
              name={plants.find((plant) => plant.id === plantId)?.name}
              price={plants.find((plant) => plant.id === plantId)?.price}
              safeWidth={safeWidth / 2}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
