import { HapticTab } from "@/components/HapticTab";
import { Tabbar } from "@/components/tabbar";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Tabs } from "expo-router";
import { Bell, Heart, Home, LeafyGreen } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      tabBar={(props) => <Tabbar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ color }) => <Heart size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color }) => <Bell size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => <LeafyGreen size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
