import { Input } from "@/components/Input";
import { Block, Button, Text } from "galio-framework";
import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styles from "./_style";
import baseTheme from "@/theme/base-theme";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("screen");

function Register() {
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();

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
            Name
          </Text>
          <Input placeholder="Enter your Name" />
        </Block>
        <Block
          style={{ position: "relative", marginBottom: 16 }}
          width={width * 0.9}
        >
          <Text style={styles.floatingText} color="white">
            Email
          </Text>
          <Input keyboardType="email-address" placeholder="Enter your Email" />
        </Block>
        <Block
          style={{ position: "relative", marginBottom: 16 }}
          width={width * 0.9}
        >
          <Text style={styles.floatingText} color="white">
            Password
          </Text>
          <Input secureTextEntry={true} placeholder="Enter your Password" />
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
            placeholder="Enter your  Confirm Password"
          />
        </Block>
      </Block>

      <Block>
        <Button
          style={styles.button}
          color={baseTheme.COLORS.PRIMARY}
          onPress={() => {
            //   navigation.navigate('OtpScreen')
          }}
          textStyle={{
            color: baseTheme.COLORS.WHITE,
            fontWeight: "500",
            fontSize: 18,
            lineHeight: 24,
          }}
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
              {" "}
              Login
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Block>
  );
}

export default Register;
