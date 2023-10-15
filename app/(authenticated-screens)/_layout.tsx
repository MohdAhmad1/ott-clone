import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, useRouter } from "expo-router";
import baseTheme from "@/theme/base-theme";
import Icon from "react-native-vector-icons/Ionicons";
import { auth } from "@/firebase";
import Spinner from "@/components/Spinner";

export default function _layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (!data) {
        return router.push("/auth/login");
      }

      setIsAuthenticated(true);
    });
  }, []);

  if (!isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner active />
      </View>
    );
  }

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
