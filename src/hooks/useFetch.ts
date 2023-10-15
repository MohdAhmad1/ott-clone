import axios, { AxiosError } from "axios";
import { useCallback, useLayoutEffect, useState } from "react";

const cache = new Map();

interface State<TState, TError> {
  isLoading: boolean;
  isFetching: boolean;
  error: null | TError;
  data: null | TState;
}

export default function useFetch<TState, TError = AxiosError>(
  url: string,
  options: { initialState?: TState; fetchOnMount: boolean } = {
    fetchOnMount: true,
  },
  customDependencyArray: unknown[] = []
) {
  const [state, setState] = useState<State<TState, TError>>({
    // loading state if cache does not exists
    isLoading: false,

    // loading state if cache exists but api is revalidating
    isFetching: true,
    error: null,
    data: (cache.get(url) as TState) ?? options?.initialState ?? null,
  });

  const refetch = useCallback(async () => {
    setState((prev) => ({ ...prev, isFetching: true }));

    let error: AxiosError | null = null;

    let data = cache.get(url);

    if (!data)
      data = await axios
        .get(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhmMGEzMmFhYTEyYmI2YWVkNTc5YTVmMTViZTkyNyIsInN1YiI6IjY1MmJhZGZjZWE4NGM3MDEyZDcwMWYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FpZaMIQU5drg1vVsdXImHu7PJufpdsLE-hGK4jVA05Q",
          },
        })
        .then((resp) => resp.data)
        .catch((err) => {
          error = err;
          return null;
        });

    if (data) {
      cache.set(url, data);
    }

    setState((prev) => ({
      isFetching: false,
      isLoading: false,
      data,
      error: error as any,
    }));
  }, [url, ...customDependencyArray]);

  useLayoutEffect(() => {
    if (options?.fetchOnMount === true) {
      if (!!state.data) {
        setState((prev) => ({ ...prev, isLoading: true }));
      }

      refetch();
    }

    return () => {
      setState((prev) => ({ ...prev, data: null }));
    };
  }, [url, ...customDependencyArray]);

  return {
    ...state,
    refetch,
  } as const;
}
