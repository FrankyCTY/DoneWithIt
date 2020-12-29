import React from "react";
import { SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default function Screen({ children, otherStyles }) {
  return (
    <SafeAreaView style={[styles.screen, otherStyles]}>
      <View style={otherStyles}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
