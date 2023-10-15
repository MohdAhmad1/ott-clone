import { useRouter } from "expo-router";
import { Block, Text } from "galio-framework";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export interface MovieProps {
  name: string;
  thumbnail: { uri: string };
  id: string | number;
}

export default function Movie({ name, thumbnail, id }: MovieProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push("/movie-detail/" + id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Block width={133}>
        <Image source={thumbnail} style={styles.img} />
        <Text style={styles.title} numberOfLines={1}>
          {name}
        </Text>
      </Block>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 133,
    height: 200,
    resizeMode: "contain",
    marginRight: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 8,
  },
});
