import { Block, Text } from "galio-framework";
import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { MovieProps } from "./Movie";
import { CONSTANTS } from "@/Constants";

const { width } = Dimensions.get("screen");

function Cast(
  props: Omit<MovieProps, "thumbnail"> & { thumbnail?: { uri: string } | null }
) {
  // const router = useRouter();

  // const handlePress = () => {
  //   router.push("/movie-detail" + props.id);
  // };

  return (
    // <TouchableOpacity onPress={handlePress}>
    <Block center width={70}>
      <Image
        source={props.thumbnail ?? { uri: CONSTANTS.dummyProfilePicURL }}
        style={styles.img}
      />
      <Text style={styles.title}>{props.name}</Text>
    </Block>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 70,
    resizeMode: "cover",
    // objectFit: "contain",
    borderRadius: 10,
  },
  title: {
    fontSize: 8,
    fontWeight: "500",
    color: "#fff",
    marginVertical: 8,
  },
});

export default Cast;
