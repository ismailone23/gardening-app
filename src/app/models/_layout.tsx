import Header from "@/components/models/Header";
import { Stack } from "expo-router";
import React from "react";

export default function ModelLayout() {
  return (
    <Stack screenOptions={{ header: () => <Header /> }}>
      <Stack.Screen
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
        name="filter"
      />
      <Stack.Screen
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
        name="categories"
      />
      <Stack.Screen
        options={{
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
        name="special-offers"
      />
    </Stack>
  );
}
