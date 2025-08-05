import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../../global.css";

import { FavouriteProvider } from "@/components/contexts/favourite-context";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    roboto: require("../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <FavouriteProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
          <Stack.Screen options={{ headerShown: false }} name="auth" />
          <Stack.Screen options={{ headerShown: false }} name="models" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </FavouriteProvider>
  );
}
