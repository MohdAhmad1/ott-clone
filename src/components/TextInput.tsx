import {
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  label?: string;
}

export default function TextInput({ style, ...props }: Props) {
  return (
    <View style={styles.root}>
      {props.label && <Text style={styles.label}> {props.label} </Text>}

      <RNTextInput
        style={[styles.input, style]}
        placeholderTextColor={"#9a9a9a"}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 12,
    marginBottom: 6,
    position: "relative",
    width: "100%",
  },

  label: {
    position: "absolute",
    transform: "translateY(-50%)",
    left: 10,
    backgroundColor: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    color: "#fff",
  },

  input: {
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    borderRadius: 12,
    width: "100%",
  },
});
