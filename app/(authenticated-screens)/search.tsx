import { Block } from "galio-framework";
import React from "react";
import { Dimensions, ScrollView, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchCard from "@/components/SearchCard";
import styles from "./_style";
const { width } = Dimensions.get("screen");

const moviess = [
  {
    user: "Avengers Age of Ultron",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Avengers",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Avengers: Infinity War",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Avengers: Endgame",
    img: require("@assets/adaptive-icon.png"),
  },
];

export function Favourite() {
  return (
    <Block style={styles.container}>
      <Block center style={{ marginVertical: 16 }}>
        <Block
          style={{ marginVertical: 16, position: "relative" }}
          row
          center
          width={width * 0.9}
        >
          <TextInput
            placeholder="Search Movies..."
            style={styles.input}
            placeholderTextColor={"#858585"}
          />
          <Ionicons
            size={32}
            name="search"
            color="#ADADAD"
            style={{ position: "absolute", right: 15, zIndex: 5, top: 12 }}
          />
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            space="between"
            row
            style={{ flexWrap: "wrap" }}
            width={width * 0.95}
          >
            {moviess.map((movie, i) => (
              <SearchCard
                key={i}
                name={movie.user}
                thumbnail={movie.img}
                id=""
              />
            ))}
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
}

export default Favourite;
