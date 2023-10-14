import React from "react";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

type Props = {};

export default function _Layout({}: Props) {
  return (
    <View style={styles.background}>
      <StatusBar style="auto" />

      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    // padding: 10,
  },
});
