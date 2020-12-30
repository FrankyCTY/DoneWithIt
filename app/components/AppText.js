import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export default function AppText({ children, otherStyles, ...otherProps }) {
  return (
    <Text style={[styles.text, otherStyles]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
