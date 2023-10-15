import { Block, Text } from "galio-framework";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { MovieProps } from "./Movie";

const { width } = Dimensions.get("screen");

function Cast(props: MovieProps) {
  // const router = useRouter();

  // const handlePress = () => {
  //   router.push("/movie-detail" + props.id);
  // };

  return (
    // <TouchableOpacity onPress={handlePress}>
    <Block center width={width * 0.18}>
      <Image source={props.thumbnail} style={styles.img} />
      <Text style={styles.title}>{props.name}</Text>
    </Block>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 90,
    resizeMode: "contain",
  },
  title: {
    fontSize: 8,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 8,
  },
});

export default Cast;
