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

  const [loaded, error] = useFonts({
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-SemiBold": require("../../assets/fonts/Roboto-SemiBold.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-ExtraBold": require("../../assets/fonts/Roboto-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
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
