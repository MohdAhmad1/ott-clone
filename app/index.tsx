import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};

export default function index({}: Props) {
  return <Text style={styles.text}>Hoora</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
