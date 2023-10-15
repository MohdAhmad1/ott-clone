import baseTheme from "@/theme/base-theme";
import { PropsWithChildren } from "react";
import { ActivityIndicator } from "react-native";

export default function Spinner(props: PropsWithChildren<{ active: boolean }>) {
  if (props.active)
    return <ActivityIndicator color={baseTheme.COLORS.PRICE_COLOR} />;

  return props.children;
}
