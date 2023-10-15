import { Input } from "@/components/Input";
import baseTheme from "@/theme/base-theme";
import { Block, Button, Text } from "galio-framework";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styles from "./_style";
import { useRouter } from "expo-router";
import { useSetState } from "@/hooks/useSetState";
import { CONSTANTS } from "@/Constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { FirebaseError } from "firebase/app";

const { width } = Dimensions.get("screen");

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formValues, setFormValues] = useSetState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formValues, string>>
  >({});

  async function login(email: string, password: string) {
    const _errors: typeof errors = {};

    if (!email.match(CONSTANTS.regex.email)) {
      _errors.email = "Invalid Email";
    }

    if (!password?.length) {
      _errors.password = "Password is required";
    }

    setErrors(_errors);

    if (Object.keys(_errors).length) {
      return;
    }

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      setIsLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-login-credentials") {
          setErrors({
            email: "Invalid Email/Password combination",
            password: "Invalid Email/Password combination",
          });
        }

        if (error.code === "auth/too-many-requests") {
          setErrors({
            email: "Try again after 5 mins",
            password: "Try again after 5 mins",
          });
        }
      }

      setIsLoading(false);
    }
  }

  return (
    <Block center flex={1} space="around">
      <Block>
        <Block style={{ alignSelf: "center", marginTop: 0 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              lineHeight: 28,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            Login
          </Text>
        </Block>
        <Block
          style={{ position: "relative", marginBottom: 16 }}
          width={width * 0.9}
        >
          <Text style={styles.floatingText} color="white">
            Email
          </Text>
          <Input
            keyboardType="email-address"
            placeholder="Enter your Email"
            value={formValues.email}
            onChange={(evt) => setFormValues({ email: evt.nativeEvent.text })}
            error={!!errors.email}
          />
          {errors.email && (
            <Text color={baseTheme.COLORS.DANGER}>{errors.email}</Text>
          )}{" "}
        </Block>

        <Block
          style={{ position: "relative", marginBottom: 16 }}
          width={width * 0.9}
        >
          <Text style={styles.floatingText} color="white">
            Password
          </Text>

          <Input
            secureTextEntry={true}
            placeholder="Enter your Password"
            value={formValues.password}
            onChange={(evt) =>
              setFormValues({ password: evt.nativeEvent.text })
            }
            error={!!errors.password}
          />
          {errors.password && (
            <Text color={baseTheme.COLORS.DANGER}>{errors.password}</Text>
          )}
        </Block>
      </Block>

      <Block>
        <Button
          style={styles.button}
          color={baseTheme.COLORS.PRIMARY}
          onPress={() => {
            login(formValues.email, formValues.password);
          }}
          textStyle={{
            color: baseTheme.COLORS.WHITE,
            fontWeight: "500",
            fontSize: 18,
            lineHeight: 24,
          }}
          loading={isLoading}
        >
          Log In
        </Button>

        <Block row center style={{ marginTop: 16 }}>
          <Text
            size={14}
            color={baseTheme.COLORS.WHITE}
            style={{
              fontWeight: "500",
              lineHeight: 20,
              textAlign: "center",
            }}
          >
            Don't have an Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/auth/register");
            }}
          >
            <Text
              size={14}
              color={baseTheme.COLORS.WHITE}
              style={{
                fontWeight: "700",
                lineHeight: 20,
                textDecorationLine: "underline",
              }}
            >
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default Login;
