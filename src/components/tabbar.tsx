import { tintColorLight } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { useState } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import TabbarBtn from "./tabbar-btn";

export function Tabbar({ state, descriptors, navigation }: BottomTabBarProps) {
  const colors = useThemeColor();
  const { buildHref } = useLinkBuilder();
  const [dimentions, setDimentions] = useState({ width: 100, height: 20 });

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimentions({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };
  const btnWidth = dimentions.width / state.routes.length;

  const tabPosX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tabPosX.value,
        },
      ],
    };
  });

  return (
    <View
      onLayout={onTabbarLayout}
      style={{
        position: "absolute",
        bottom: 40,
        paddingVertical: 15,
        marginHorizontal: 18,
        borderRadius: 50,
      }}
      className="flex flex-row bg-gray-50 items-center justify-between"
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: tintColorLight,
            borderRadius: 50,
            marginHorizontal: 12,
            height: dimentions.height - 12,
            width: btnWidth - 18,
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          tabPosX.value = withSpring(btnWidth * index - 3, {
            duration: 1500,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const icon = options.tabBarIcon
          ? options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? colors.background : colors.text,
              size: 25,
            })
          : null;

        return (
          <PlatformPressable
            key={route.key}
            android_ripple={{ color: "transparent", borderless: true }}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center"
          >
            <TabbarBtn icon={icon} isFocused={isFocused} />
          </PlatformPressable>
        );
      })}
    </View>
  );
}
