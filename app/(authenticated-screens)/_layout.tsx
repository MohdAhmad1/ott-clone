import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import baseTheme from "@/theme/base-theme";
import Icon from "react-native-vector-icons/Ionicons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveBackgroundColor: "#000",
        tabBarActiveBackgroundColor: "#000",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? baseTheme.COLORS.PRIMARY
                    : "transparent",
                  borderRadius: 50,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name={"home-outline"}
                  size={20}
                  color={focused ? "#fff" : color}
                />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? baseTheme.COLORS.PRIMARY
                    : "transparent",
                  borderRadius: 50,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name={"search-outline"}
                  size={20}
                  color={focused ? "#fff" : color}
                />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="auth/profile"
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: focused
                    ? baseTheme.COLORS.PRIMARY
                    : "transparent",
                  borderRadius: 50,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name={"person-outline"}
                  size={20}
                  color={focused ? "#fff" : color}
                />
              </View>
            );
          },
        }}
      />

      <Tabs.Screen
        name="_style"
        options={{
          headerShown: false,

          href: null,
        }}
      />

      <Tabs.Screen
        name="movie-detail/[id]"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
