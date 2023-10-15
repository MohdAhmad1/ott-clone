import Movie from "@/components/Movie";
import MovieSlider from "@/components/MovieSlider";
import { useRouter } from "expo-router";
import { Block, Text } from "galio-framework";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import styles from "./_style";
const { width, height } = Dimensions.get("screen");

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

function Home() {
  const router = useRouter();

  return (
    <Block style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#f9f9f9"} />
      <Block
        style={{ marginVertical: 16, alignItems: "center" }}
        row
        center
        space="between"
        width={width * 0.9}
      >
        {/* <Image source={Images.Re} style={styles.profile} /> */}
      </Block>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Block center>
          <Block
            style={{ marginTop: 16, alignItems: "center" }}
            row
            center
            width={width * 0.9}
          >
            <Block
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Popular
              </Text>
            </Block>

            <Block
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Upcoming
              </Text>
            </Block>

            <Block
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Classics
              </Text>
            </Block>

            <Block
              style={{
                borderWidth: 1,
                borderRadius: 20,
                borderColor: "#888",
                paddingHorizontal: 12,
                paddingVertical: 5,
                marginRight: 8,
              }}
            >
              <Text size={10} color="#fff" style={{ fontWeight: "400" }}>
                Top 10
              </Text>
            </Block>
          </Block>

          <Block width={width * 0.9} style={{ marginTop: 16 }}>
            <Block>
              <Text style={styles.title}>Now Playing</Text>
            </Block>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 20 }}
            >
              {moviess.map((movie, i) => (
                <MovieSlider
                  key={i}
                  name={movie.user}
                  thumbnail={movie.img}
                  chapter={movie.chapter}
                  id="Hola"
                />
              ))}
            </ScrollView>
          </Block>

          <Block width={width * 0.9} style={{ marginVertical: 16 }}>
            <Block>
              <Text style={styles.title}>Popular</Text>
            </Block>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {moviess.map((movie, i) => (
                <Movie key={i} name={movie.user} thumbnail={movie.img} id="i" />
              ))}
            </ScrollView>
          </Block>

          <Block width={width * 0.9} style={{ marginVertical: 16 }}>
            <Block>
              <Text style={styles.title}>Upcoming</Text>
            </Block>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {moviess.map((movie, i) => (
                <Movie key={i} name={movie.user} thumbnail={movie.img} id="i" />
              ))}
            </ScrollView>
          </Block>
        </Block>
      </ScrollView>
      {/* {isLoading && <SpinnerOverlay message={'Fetching Posts...'} />} */}
    </Block>
  );
}

export default Home;
