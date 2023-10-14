import PasswordInput from "@/components/PasswordInput";
import Text from "@/components/Text";
import TextInput from "@/components/TextInput";
import { StyleSheet, View } from "react-native";

export default function login() {
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Login</Text>

      <TextInput label="Helmlo" placeholder="Hewl" />
      <PasswordInput label="Helmlo" placeholder="Hewl" />

      <Text>login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
