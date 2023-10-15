import Cast from "@/components/Cast";
import Movie from "@/components/Movie";
import { Block, Text } from "galio-framework";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./_style";
const { width, height } = Dimensions.get("screen");

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import baseTheme from "@/theme/base-theme";
import { useRouter } from "expo-router";

const moviess = [
  {
    user: "John Wick",
    img: require("@assets/adaptive-icon.png"),
    chapter: "Chapter 04",
  },
  {
    user: "John Wick: Chapter 4",
    img: require("@assets/adaptive-icon.png"),
    chapter: "Chapter 04",
  },
  {
    user: "John Wick: Chapter 4",
    img: require("@assets/adaptive-icon.png"),
    chapter: "Chapter 04",
  },
];

const casts = [
  {
    user: "Keanu Reeves",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Donnie Yen",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Bill Skarsgård",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Ian McShane",
    img: require("@assets/adaptive-icon.png"),
  },
  {
    user: "Laurence Fishburne",
    img: require("@assets/adaptive-icon.png"),
  },
];

function MovieDetail() {
  const router = useRouter();

  return (
    <Block style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#f9f9f9"} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Block center>
          <Block
            width={width * 0.9}
            style={{ marginTop: 32, position: "relative", height: 227 }}
          >
            <TouchableOpacity onPress={() => router.back()}>
              <Block
                center
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 50,
                  backgroundColor: baseTheme.COLORS.PRIMARY,
                  justifyContent: "center",
                  position: "absolute",
                  left: 8,
                }}
                width={width * 0.1}
              >
                <AntDesign
                  size={18}
                  color={baseTheme.COLORS.WHITE}
                  name="closecircleo"
                />
              </Block>
            </TouchableOpacity>
          </Block>
          <Block width={width * 0.9} style={{ marginTop: 0 }}>
            <Text
              style={{ fontWeight: "400", lineHeight: 32 }}
              color="white"
              size={24}
            >
              John Wick: Chapter 4
            </Text>
            <Block
              width={width * 0.9}
              row
              center
              style={{ marginTop: 8, marginBottom: 16 }}
            >
              <FontAwesome size={24} color={"#888"} name="clock-o" />
              <Text
                style={{ fontWeight: "500", lineHeight: 18, marginLeft: 8 }}
                color="white"
                size={12}
              >
                2h 50m
              </Text>
            </Block>
          </Block>
          <Block
            style={{ marginVertical: 12, alignItems: "center" }}
            row
            center
            width={width * 0.9}
          >
            <Block
              row
              center
              style={{
                borderWidth: 1,
                borderRadius: 19.5,
                width: 114,
                height: 36,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 16,
              }}
            >
              <AntDesign size={16} name="download" color={"#fff"} />
              <Text
                size={12}
                color="#fff"
                style={{ fontWeight: "500", marginLeft: 8 }}
              >
                Download
              </Text>
            </Block>
            <Block
              row
              center
              style={{
                borderWidth: 1,
                borderRadius: 19.5,
                width: 94,
                height: 36,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 16,
              }}
            >
              <Icon size={18} name="add" color={"#fff"} />
              <Text size={12} color="#fff" style={{ fontWeight: "500" }}>
                My List
              </Text>
            </Block>
          </Block>
          <Block
            width={width * 0.9}
            style={{
              borderBottomWidth: 2,
              borderColor: "#fff",
              marginVertical: 16,
            }}
          />
          <Block
            style={{ alignItems: "center" }}
            row
            center
            width={width * 0.9}
          >
            <Block
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Action
              </Text>
            </Block>
            <Block
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Thriller
              </Text>
            </Block>
            <Block
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Crime
              </Text>
            </Block>
          </Block>

          <Block width={width * 0.9}>
            <Block width={width * 0.9} row center style={{ marginTop: 16 }}>
              <Icon size={24} color={"#E1CD17"} name="star" />
              <Text
                style={{ fontWeight: "500", lineHeight: 18, marginLeft: 8 }}
                color="white"
                size={12}
              >
                8.0 (1,024)
              </Text>
              <Text
                style={{ fontWeight: "500", lineHeight: 18, marginLeft: 16 }}
                color="white"
                size={12}
              >
                24 March 2023
              </Text>
            </Block>
            <Text
              size={12}
              style={{ fontWeight: "300", lineHeight: 18, marginTop: 16 }}
              color="white"
            >
              With the price on his head ever increasing, John Wick uncovers a
              path to defeating The High Table. But before he can earn his
              freedom, Wick must face off against a new enemy with powerful
              alliances across the globe and forces that turn old friends into
              foes.
            </Text>
          </Block>
          <Block width={width * 0.9} style={{ marginTop: 16 }}>
            <Block>
              <Text style={styles.title}>Top Cast</Text>
            </Block>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {casts.map((cast, i) => (
                <Cast key={i} name={cast.user} thumbnail={cast.img} id={"si"} />
              ))}
            </ScrollView>
          </Block>

          <Block width={width * 0.9} style={{ marginVertical: 16 }}>
            <Block>
              <Text style={styles.title}>More like This</Text>
            </Block>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {moviess.map((movie, i) => (
                <Movie key={i} name={movie.user} thumbnail={movie.img} id="l" />
              ))}
            </ScrollView>
          </Block>
        </Block>
      </ScrollView>
      {/* {isLoading && <SpinnerOverlay message={'Fetching Posts...'} />} */}
    </Block>
  );
}

export default MovieDetail;
