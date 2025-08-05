import Categories from "@/components/home/Categories";
import Header from "@/components/home/Header";
import Plants from "@/components/home/Plants";
import SearchBar from "@/components/home/SearchBar";
import SpecialOffers from "@/components/home/SpecialOffers";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const colors = useThemeColor();
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      edges={["top"]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 5 }}>
        <View className="px-5 flex flex-col gap-y-10">
          <Header />
          <SearchBar />
          <Categories />
          <SpecialOffers />
          <Plants />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
