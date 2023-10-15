import { Block } from "galio-framework";
import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, ScrollView, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchCard from "@/components/SearchCard";
import styles from "./_style";
import useFetch from "@/hooks/useFetch";
import { IMovieApiResponse } from "@/intrfaces/MovieApiResponse";
import { getTMDBImage } from "@/utils";
import { useDebounce } from "@/hooks/useDebounce";
import Spinner from "@/components/Spinner";
const { width } = Dimensions.get("screen");

export function Favourite() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue);

  const popularMoviesQuery = useFetch<IMovieApiResponse>(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );

  const searchMoviesQuery = useFetch<IMovieApiResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`,
    {
      fetchOnMount: false,
    }
  );

  const movies = useMemo(() => {
    if (!debouncedValue.length && !searchMoviesQuery.data?.results.length) {
      return popularMoviesQuery.data?.results ?? [];
    }

    return searchMoviesQuery.data?.results;
  }, [searchMoviesQuery, debouncedValue, popularMoviesQuery]);

  useEffect(() => {
    searchMoviesQuery.refetch();
  }, [debouncedValue]);

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
            value={searchValue}
            onChange={(evt) => setSearchValue(evt.nativeEvent.text)}
          />
          <Ionicons
            size={32}
            name="search"
            color="#ADADAD"
            style={{ position: "absolute", right: 15, zIndex: 5, top: 12 }}
          />
        </Block>

        <Spinner
          active={popularMoviesQuery.isLoading || searchMoviesQuery.isFetching}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block
              space="between"
              row
              style={{ flexWrap: "wrap" }}
              width={width * 0.95}
            >
              {movies?.map((movie, i) => (
                <SearchCard
                  key={movie.id}
                  name={movie.title}
                  thumbnail={getTMDBImage(movie.poster_path)}
                  id={movie.id}
                />
              ))}
            </Block>
          </ScrollView>
        </Spinner>
      </Block>
    </Block>
  );
}

export default Favourite;
