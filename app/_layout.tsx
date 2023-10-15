import React from "react";
import { Slot } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

type Props = {};

export default function _Layout({}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.background}>
        <StatusBar style="auto" />

        <View style={{ flex: 1 }}>
          <Slot />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    // padding: 10,
  },

  container: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "column",
  },
});
