import { useFavourite } from "@/components/contexts/favourite-context";
import { tintColorDark } from "@/constants/Colors";
import { plants } from "@/constants/data";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Minus, Plus } from "lucide-react-native";
import React, { useMemo } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cart() {
  const { cart: cartData, handleCart } = useFavourite();

  const total = useMemo(() => {
    let x = 0;
    cartData.map((data) => {
      const plant = plants.find((plant) => plant.id === data.plantId);
      if (!plant) return;
      x += plant.price * data.quantity;
    });
    return x;
  }, [cartData]);
  const colors = useThemeColor();
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="h-full"
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View className="px-5 flex flex-col w-full">
          <Text
            style={{ fontSize: 16, fontFamily: "Nunito-Regular" }}
            className="text-center py-2"
          >
            My Cart
          </Text>
          <View className="w-full flex flex-col gap-y-5 mt-5">
            {cartData.map(({ id, plantId, quantity }) => {
              const plant = plants.find((plant) => plant.id === plantId);
              if (!plant)
                return (
                  <View key={id}>
                    <Text>Plan Not Found</Text>
                  </View>
                );
              return (
                <View key={id} className="flex w-full flex-row gap-x-4">
                  <View>
                    <Image
                      source={{ uri: plant.image[0] }}
                      style={{
                        width: 100,
                        height: 150,
                        resizeMode: "cover",
                        borderRadius: 20,
                      }}
                      accessibilityLabel="offer_plant"
                    />
                  </View>
                  <View className="flex flex-col justify-between items-start">
                    <View className="w-full flex flex-col gap-y-5">
                      <Text
                        style={{ fontSize: 16, fontFamily: "Nunito-Medium" }}
                      >
                        {plant.name}
                      </Text>
                      <Text
                        style={{ fontSize: 12, fontFamily: "Nunito-Regular" }}
                        className="text-gray-500"
                      >
                        Size:{" "}
                        <Text
                          style={{ fontFamily: "Nunito-Bold" }}
                          className="text-zinc-700"
                        >
                          {plant.size.charAt(0).toUpperCase()}
                        </Text>
                      </Text>
                      <Text
                        style={{ fontSize: 12, fontFamily: "Nunito-Regular" }}
                        className="text-gray-500"
                      >
                        {plant.price}
                      </Text>
                    </View>
                    <View className="w-full flex flex-row">
                      <Pressable
                        onPress={() => handleCart(id, "-")}
                        className="p-2 rounded-md border border-gray-300"
                      >
                        <Minus size={20} color={"#4b5563"} />
                      </Pressable>
                      <Text className="py-2 px-4 text-zinc-700">
                        {quantity}
                      </Text>
                      <Pressable
                        onPress={() => handleCart(id, "+")}
                        className="p-2 rounded-md border border-gray-300"
                      >
                        <Plus size={20} color={"#4b5563"} />
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="w-full flex flex-col mt-10">
            <View className="flex flex-row w-full justify-between">
              <Text
                style={{ fontSize: 14, fontFamily: "Nunito-Regular flex-1" }}
                className="text-gray-500"
              >
                Sub Total
              </Text>
              <Text
                style={{ fontSize: 14, fontFamily: "Nunito-Regular" }}
                className="text-gray-500"
              >
                ${total.toFixed(2)}
              </Text>
            </View>
            <View className="flex flex-row w-full justify-between">
              <Text
                style={{ fontSize: 14, fontFamily: "Nunito-Regular" }}
                className="text-gray-500 flex-1"
              >
                Shiping
              </Text>
              <Text
                style={{ fontSize: 14, fontFamily: "Nunito-Regular" }}
                className="text-gray-500"
              >
                $0.00
              </Text>
            </View>
            <View className="w-full h-1 border-t my-2 border-dashed border-gray-400" />
            <View className="flex flex-row w-full justify-between">
              <Text
                className="flex-1"
                style={{ fontSize: 16, fontFamily: "Nunito-Medium" }}
              >
                Total
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Nunito-Medium" }}>
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>
          <Pressable
            className="w-full h-16 mt-5 rounded-full flex items-center justify-center"
            style={{ backgroundColor: tintColorDark }}
          >
            <Text
              className="text-white"
              style={{ fontFamily: "Nunito-Medium", fontSize: 18 }}
            >
              Checkout
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
