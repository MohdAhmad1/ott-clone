import { Text as RNText, StyleSheet, TextProps } from "react-native";
import React from "react";

interface Props extends TextProps {}

export default function Text({ style, ...props }: Props) {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {props.children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
