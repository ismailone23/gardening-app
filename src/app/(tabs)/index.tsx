import Categories from "@/components/home/Categories";
import Header from "@/components/home/Header";
import Plants from "@/components/home/Plants";
import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const colors = useThemeColor();
  const [selected, setSelected] = useState(0);

  const handlePress = useCallback((id: number) => {
    setSelected(id);
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background }}
      className="w-full h-full"
      edges={["top", "bottom"]}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View className="px-5 flex flex-col gap-y-10">
          <Header />
          {/* <Banner /> */}
          <Categories handlePress={handlePress} selected={selected} />
          <Plants selected={selected} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
