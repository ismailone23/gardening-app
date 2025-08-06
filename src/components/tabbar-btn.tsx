import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabbarBtn({
  isFocused,
  icon,
}: {
  isFocused: boolean;

  icon: React.ReactNode;
}) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [isFocused, scale]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.1]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
    };
  });

  return <Animated.View style={[animatedIconStyle]}>{icon}</Animated.View>;
}
