import { Input } from "@/components/Input";
import { auth } from "@/firebase";
import baseTheme from "@/theme/base-theme";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Block, Button, Text } from "galio-framework";
import React, { useState } from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import styles from "./_style";
import { useSetState } from "@/hooks/useSetState";
import { CONSTANTS } from "@/Constants";
import { FirebaseError } from "firebase/app";

const { width } = Dimensions.get("screen");

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [formValues, setFormValues] = useSetState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formValues, string>>
  >({});

  async function register(
    email: string,
    password: string,
    confPassword: string
  ) {
    const _errors: typeof errors = {};

    if (!email.match(CONSTANTS.regex.email)) {
      _errors.email = "Invalid Email";
    }

    if (!password.match(CONSTANTS.regex.password)) {
      _errors.password =
        "Password must be minimum 8 charectars long, and must contain 1 number, 1 lowercase letter, 1 uppercase and 1 special charectar";
    }

    if (confPassword !== password) {
      _errors.confirmPassword = "Password did't match";
    }

    setErrors(_errors);

    if (Object.keys(_errors).length) {
      return;
    }

    try {
      setIsLoading(true);

      await createUserWithEmailAndPassword(auth, email, password);

      setIsLoading(false);
    } catch (error) {
      if (
        error instanceof FirebaseError &&
        error.code === "auth/email-already-in-use"
      ) {
        setErrors({
          email: "Email already exists",
        });
      }
      setIsLoading(false);
    }
  }

  console.log(errors);

  return (
    <Block center flex={1} space="around">
      <Block>
        <Block style={{ alignSelf: "center", marginTop: 0 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              lineHeight: 28,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Sign Up
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
          )}
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

        <Block
          style={{ position: "relative", marginBottom: 16 }}
          width={width * 0.9}
        >
          <Text style={styles.floatingText} color="white">
            Confirm Password
          </Text>

          <Input
            secureTextEntry={true}
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            onChange={(evt) =>
              setFormValues({ confirmPassword: evt.nativeEvent.text })
            }
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <Text color={baseTheme.COLORS.DANGER}>
              {errors.confirmPassword}
            </Text>
          )}
        </Block>
      </Block>

      <Block>
        <Button
          style={styles.button}
          color={baseTheme.COLORS.PRIMARY}
          onPress={() => {
            register(
              formValues.email,
              formValues.password,
              formValues.confirmPassword
            );
          }}
          textStyle={{
            color: baseTheme.COLORS.WHITE,
            fontWeight: "500",
            fontSize: 18,
            lineHeight: 24,
          }}
          loading={isLoading}
          disabled={isLoading}
        >
          Sign Up
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
            Already have an Account?
          </Text>

          <TouchableOpacity
            onPress={() => {
              router.push("/auth/login");
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
              Login
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default Register;
