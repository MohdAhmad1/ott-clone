import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Block, Text, theme, Button } from "galio-framework";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MovieProps } from "./Movie";
import baseTheme from "@/theme/base-theme";
const { width, height } = Dimensions.get("screen");

interface MovieSliderProps extends MovieProps {
  chapter: string;
}

export default function MovieSlider(props: MovieSliderProps) {
  const handlePress = () => {
    // navigation.navigate('Plain', { screen: 'MovieDetail' })
  };

  return (
    <Block>
      <Image source={props.thumbnail} style={styles.img} />
      <Block
        width={width * 0.8}
        space="between"
        row
        center
        style={{ padding: 8 }}
      >
        <Block>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.chapter}>{props.chapter}</Text>
        </Block>

        <Block center>
          <Button
            onPress={handlePress}
            style={styles.button}
            color={baseTheme.COLORS.PRIMARY}
          >
            <Ionicons size={18} color={"#fff"} name="play-circle-outline" />
            <Text size={12} color="#fff">
              Watch Later
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  img: {
    width: width * 0.8,
    height: 449,
    resizeMode: "contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 4,
  },
  button: {
    width: 125,
    height: 36,
    borderRadius: 20,
    alignItems: "center",

    flexDirection: "row",
  },
  chapter: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    marginBottom: 4,
  },
});
