import { useThemeColor } from "@/hooks/useThemeColor";
import { useRouter } from "expo-router";
import { Search, SlidersHorizontal } from "lucide-react-native";
import React, { useCallback } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SearchBar() {
  const router = useRouter();
  const colors = useThemeColor();
  const handlePress = useCallback(() => {
    router.push("/models/filter");
  }, [router]);

  return (
    <View className="relative w-full">
      <View className="absolute left-3 z-10 top-1/2 -translate-y-1/2">
        <Search size={22} color={colors.inputText} />
      </View>
      <TouchableOpacity
        onPress={handlePress}
        className="absolute right-3 z-10 top-1/2 -translate-y-1/2"
      >
        <SlidersHorizontal size={22} color={colors.inputText} />
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <TextInput
          style={{
            backgroundColor: colors.inputField,
            color: colors.inputText,
          }}
          className="py-4 px-12 text-lg rounded-lg w-full"
          placeholder="Search"
          // placeholderTextColor={colors}
          selectionColor={colors.inputText}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
