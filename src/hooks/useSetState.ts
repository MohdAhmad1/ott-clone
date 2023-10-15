import { useCallback, useState } from "react";

export function useSetState<T extends Record<string, any>>(initialState: T) {
  const [state, setLocalState] = useState<T>(initialState);

  const setState = useCallback(
    (data: Partial<T>, reset?: boolean) => {
      if (reset) {
        setLocalState(initialState);
      } else {
        setLocalState((prev) => ({ ...prev, ...data }));
      }
    },
    [setLocalState]
  );

  return [state, setState] as const;
}
