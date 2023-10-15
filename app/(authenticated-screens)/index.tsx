import Movie from "@/components/Movie";
import MovieSlider from "@/components/MovieSlider";
import Spinner from "@/components/Spinner";
import useFetch from "@/hooks/useFetch";
import { IMovieApiResponse } from "@/intrfaces/MovieApiResponse";
import { getTMDBImage } from "@/utils";
import { Block, Text } from "galio-framework";
import { useMemo } from "react";
import { Dimensions, ScrollView, StatusBar } from "react-native";
import styles from "./_style";
const { width, height } = Dimensions.get("screen");

function Home() {
  const popularMoviesQuery = useFetch<IMovieApiResponse>(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  const upcomingMoviesQuery = useFetch<IMovieApiResponse>(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );

  const nowPlayingMovies = useMemo(() => {
    return popularMoviesQuery.data?.results.splice(0, 5) ?? [];
  }, [popularMoviesQuery.data]);

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

            <Spinner active={popularMoviesQuery.isLoading}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
              >
                {nowPlayingMovies.map((movie, i) => (
                  <MovieSlider
                    key={i}
                    name={movie.title}
                    thumbnail={getTMDBImage(movie.poster_path)}
                    id={movie.id}
                  />
                ))}
              </ScrollView>
            </Spinner>
          </Block>

          <Block width={width * 0.9} style={{ marginVertical: 16 }}>
            <Block>
              <Text style={styles.title}>Popular</Text>
            </Block>

            <Spinner active={popularMoviesQuery.isLoading}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
              >
                {popularMoviesQuery.data?.results?.map((movie, i) => (
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

          <Block width={width * 0.9} style={{ marginVertical: 16 }}>
            <Block>
              <Text style={styles.title}>Upcoming</Text>
            </Block>

            <Spinner active={upcomingMoviesQuery.isLoading}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20 }}
              >
                {upcomingMoviesQuery.data?.results?.map((movie, i) => (
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
      </ScrollView>
      {/* {isLoading && <SpinnerOverlay message={'Fetching Posts...'} />} */}
    </Block>
  );
}

export default Home;
