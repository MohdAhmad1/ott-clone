import baseTheme from "@/theme/base-theme";
import { useRouter } from "expo-router";
import { Block, Button, Text } from "galio-framework";
import { Dimensions, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../_style";

const { width, height } = Dimensions.get("screen");

function Profile() {
  const router = useRouter();

  return (
    <Block style={styles.container}>
      <Block row center width={width * 0.9} style={{ marginVertical: 32 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Block
            center
            style={{
              width: 34,
              height: 34,
              borderRadius: 50,
              backgroundColor: baseTheme.COLORS.PRIMARY,
              justifyContent: "center",
            }}
            width={width * 0.1}
          >
            <AntDesign
              size={18}
              color={baseTheme.COLORS.WHITE}
              name="closecircleo"
            />
          </Block>
        </TouchableOpacity>

        <Block center width={width * 0.7}>
          <Text color="#fff" style={{ fontWeight: "500" }} size={20}>
            My Profile
          </Text>
        </Block>
      </Block>

      <Block
        style={{ marginVertical: 32, marginBottom: 8, alignItems: "center" }}
        center
        width={width * 0.9}
      >
        {/* <Image source={Images.Profile} style={{ width: 80, height: 80 }} /> */}
        <Text
          size={16}
          color="#fff"
          style={{
            fontWeight: "500",
            letterSpacing: 0.1,
            lineHeight: 24,
            marginVertical: 16,
          }}
        >
          John Doe
        </Text>
      </Block>

      <Block flex={6} center width={width * 0.95}>
        <TouchableOpacity>
          <Block center row width={width * 0.9} style={{ marginBottom: 16 }}>
            <Block center>
              <Ionicons
                size={24}
                name="person-outline"
                color={baseTheme.COLORS.WHITE}
              />
            </Block>

            <Block width={width * 0.75}>
              <Text
                size={16}
                color="#fff"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 24,
                  marginLeft: 8,
                }}
              >
                Account
              </Text>
              <Text
                size={12}
                color="#858585"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 18,
                  marginLeft: 8,
                }}
              >
                Edit Profile
              </Text>
              <Text
                size={12}
                color="#858585"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 18,
                  marginLeft: 8,
                }}
              >
                Change Password
              </Text>
            </Block>
            <Block width={width * 0.1}>
              <Ionicons color="#fff" size={24} name="chevron-forward-outline" />
            </Block>
          </Block>
        </TouchableOpacity>

        <TouchableOpacity>
          <Block center row width={width * 0.9} style={{ marginBottom: 16 }}>
            <Block center>
              <FontAwesome
                size={24}
                name="gear"
                color={baseTheme.COLORS.WHITE}
              />
            </Block>

            <Block width={width * 0.75}>
              <Text
                size={16}
                color="#fff"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 24,
                  marginLeft: 8,
                }}
              >
                Settings
              </Text>
              <Text
                size={12}
                color="#858585"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 18,
                  marginLeft: 8,
                }}
              >
                Theme
              </Text>
              <Text
                size={12}
                color="#858585"
                style={{
                  fontWeight: "500",
                  letterSpacing: 0.1,
                  lineHeight: 18,
                  marginLeft: 8,
                }}
              >
                Permission
              </Text>
            </Block>
            <Block width={width * 0.1}>
              <Ionicons color="#fff" size={24} name="chevron-forward-outline" />
            </Block>
          </Block>
        </TouchableOpacity>
      </Block>

      <Block center flex={1}>
        <Button
          textStyle={{
            color: baseTheme.COLORS.WHITE,
            fontWeight: "500",
            fontSize: 16,
          }}
          style={styles.buttonOutline}
        >
          Logout
        </Button>
      </Block>
      {/* {isLoading && <SpinnerOverlay message={'Saving...'} />} */}
    </Block>
  );
}

export default Profile;
