import { plants, specialOffers } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import Offer from "./Offer";

export default function SpecialOffers() {
  const colors = useThemeColor();

  return (
    <View className="w-full flex gap-y-2">
      <View className="w-full flex flex-row justify-between">
        <Text style={{ color: colors.text }} className="font-medium text-xl">
          Special offers
        </Text>
        <Link href="/models/special-offers">
          <Text
            style={{ color: colors.inputText }}
            className="text-sm font-medium"
          >
            See all
          </Text>
        </Link>
      </View>
      <View className="flex w-full justify-between flex-row">
        {specialOffers.slice(0, 2).map(({ discount, plantId, id, until }) => (
          <Offer
            key={id}
            link={plants.find((plant) => plant.id === plantId)?.image[0]}
            discount={discount}
            id={id}
            until={until}
          />
        ))}
      </View>
    </View>
  );
}
