import { tintColorLight } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { LucideIcon } from "lucide-react-native";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable } from "react-native";

export default function Category({
  id,
  title,
  handlePress,
  selected,
  Icon,
  safeWidth,
}: {
  id: string;
  title: string;
  Icon: LucideIcon;
  handlePress: (id: string) => void;
  selected: string;
  safeWidth: number;
}) {
  const anim = useRef(new Animated.Value(selected === id ? 1 : 0)).current;
  const colors = useThemeColor();

  useEffect(() => {
    Animated.timing(anim, {
      toValue: selected === id ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [selected, id, anim]);

  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.categoryColor, tintColorLight],
  });

  const innerBg = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(22,163,74,0.1)", "#fff"],
  });

  const textColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#16A34A", "#FFFFFF"],
  });

  return (
    <Pressable
      onPress={() => handlePress(id)}
      style={{
        width: safeWidth,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          backgroundColor: bgColor,
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          borderRadius: 8,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: innerBg,
            padding: 12,
            borderRadius: 9999,
          }}
        >
          <Icon strokeWidth={1} size={32} color="#22C55E" />
        </Animated.View>

        <Animated.Text
          style={{
            marginTop: 4,
            fontSize: 14,
            fontFamily: "Roboto",
            color: textColor,
          }}
        >
          {title}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
}
