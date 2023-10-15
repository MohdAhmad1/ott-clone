import Cast from "@/components/Cast";
import Movie from "@/components/Movie";
import { Block, Text } from "galio-framework";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../_style";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import baseTheme from "@/theme/base-theme";
import { useRouter, useLocalSearchParams } from "expo-router";
import useFetch from "@/hooks/useFetch";
import { IMovieDetailsApiResponse } from "@/intrfaces/MovieDetailsApiResponse";
import { IMovieApiResponse } from "@/intrfaces/MovieApiResponse";
import { getTMDBImage } from "@/utils";
import { IMovieCastAPIResponse } from "@/intrfaces/IMovieCastApiResponse";
import dayjs from "dayjs";
import { useMemo } from "react";
import Spinner from "@/components/Spinner";

const { width, height } = Dimensions.get("screen");

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
  const params = useLocalSearchParams();

  const movieDetailsQuery = useFetch<IMovieDetailsApiResponse>(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`
  );

  const movieCastQuery = useFetch<IMovieCastAPIResponse>(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`
  );

  const similarMoviesQuery = useFetch<IMovieApiResponse>(
    `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1`
  );

  const movietime = useMemo(() => {
    let totalTime = movieDetailsQuery.data?.runtime ?? 0;

    const hours = Math.floor(totalTime / 60);
    const mins = totalTime - hours * 60;

    return `${hours}hr ${mins}m`;
  }, [movieDetailsQuery.data?.runtime]);

  return (
    <Block style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={"#f9f9f9"} />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <ImageBackground
            source={
              movieDetailsQuery.data?.poster_path
                ? getTMDBImage(movieDetailsQuery.data?.poster_path)
                : (null as unknown as any)
            }
            style={{
              position: "relative",
              height: 400,
              width: "100%",
              marginBottom: 18,
              padding: 10,
            }}
            imageStyle={{
              resizeMode: "contain",
            }}
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
                  top: 8,
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
          </ImageBackground>

          <Block center>
            <Spinner active={movieDetailsQuery.isLoading}>
              <Block width={width * 0.9} style={{ marginTop: 0 }}>
                <Text
                  style={{ fontWeight: "400", lineHeight: 32 }}
                  color="white"
                  size={24}
                >
                  {movieDetailsQuery.data?.title}
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
                    {movietime}
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
                {movieDetailsQuery.data?.genres?.map((genre) => {
                  return (
                    <Block
                      key={genre.id}
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#888",
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                        marginRight: 8,
                      }}
                    >
                      <Text
                        size={10}
                        color="#fff"
                        style={{ fontWeight: "400" }}
                      >
                        {genre.name}
                      </Text>
                    </Block>
                  );
                })}
              </Block>

              <Block width={width * 0.9}>
                <Block width={width * 0.9} row center style={{ marginTop: 16 }}>
                  <Icon size={24} color={"#E1CD17"} name="star" />
                  <Text
                    style={{ fontWeight: "500", lineHeight: 18, marginLeft: 8 }}
                    color="white"
                    size={12}
                  >
                    {Math.floor(movieDetailsQuery.data?.vote_average ?? 0)} (
                    {movieDetailsQuery.data?.vote_count})
                  </Text>
                  <Text
                    style={{
                      fontWeight: "500",
                      lineHeight: 18,
                      marginLeft: 16,
                    }}
                    color="white"
                    size={12}
                  >
                    {dayjs(movieDetailsQuery.data?.release_date).format(
                      "MMM DD YYYY"
                    )}
                  </Text>
                </Block>
                <Text
                  size={12}
                  style={{ fontWeight: "300", lineHeight: 18, marginTop: 16 }}
                  color="white"
                >
                  {movieDetailsQuery.data?.overview}
                </Text>
              </Block>
            </Spinner>

            <Block width={width * 0.9} style={{ marginTop: 16 }}>
              <Block>
                <Text style={styles.title}>Top Cast</Text>
              </Block>

              <Spinner active={movieCastQuery.isLoading}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {movieCastQuery?.data?.cast.map((cast, i) => (
                    <Cast
                      key={i}
                      name={cast.name}
                      thumbnail={
                        cast.profile_path
                          ? getTMDBImage(cast.profile_path)
                          : null
                      }
                      id={"si"}
                    />
                  ))}
                </ScrollView>
              </Spinner>
            </Block>

            <Block width={width * 0.9} style={{ marginVertical: 16 }}>
              <Block>
                <Text style={styles.title}>More like This</Text>
              </Block>

              <Spinner active={similarMoviesQuery.isLoading}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 20 }}
                >
                  {!similarMoviesQuery.data?.results?.length && (
                    <Text>Not Found</Text>
                  )}

                  {similarMoviesQuery?.data?.results?.map((movie, i) => (
                    <Movie
                      key={movie.id}
                      name={movie.title}
                      thumbnail={getTMDBImage(movie.poster_path)}
                      id={movie.id}
                    />
                  ))}
                </ScrollView>
              </Spinner>
            </Block>
          </Block>
        </View>
      </ScrollView>
    </Block>
  );
}

export default MovieDetail;
