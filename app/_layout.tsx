import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

type Props = {};

export default function _Layout({}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto" />

      <View style={styles.background}>
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
    paddingTop: 30,
    // padding: 10,
  },

  container: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "column",
  },
});
