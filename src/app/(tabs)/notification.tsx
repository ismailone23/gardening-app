import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notification() {
  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView>
        <View>
          <Text>Notification</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
