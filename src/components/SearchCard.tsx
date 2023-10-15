import { Block, Text } from "galio-framework";
import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MovieProps } from "./Movie";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("screen");

const Favorites = (props: MovieProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/movie-detail" + props.id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Block center width={width * 0.45}>
        <Image source={props.thumbnail} style={styles.img} />
        <Text style={styles.title}>{props.name}</Text>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width * 0.43,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 16,
  },
});

export default Favorites;
