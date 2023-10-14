import { View, Text, TextInputProps } from "react-native";
import React from "react";
import TextInput from "./TextInput";

interface Props extends TextInputProps {
  label?: string;
}

export default function PasswordInput(props: Props) {
  return <TextInput />;
}
