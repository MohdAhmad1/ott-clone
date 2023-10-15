import baseTheme from "@/theme/base-theme";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: width * 0.43,
    height: height * 0.12,
    marginVertical: 16,
    elevation: 4,
    shadowColor: "#858585",
    shadowOffset: { width: 4, height: 12 },
    shadowRadius: 0.8,
    shadowOpacity: 0.9,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  profile: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  userProfile: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 100,
  },
  name: {
    color: baseTheme.COLORS.PRIMARY,
    marginVertical: 4,
  },
  title: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 16,
  },
  header: {
    color: "#0E1012",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
  },
  welcome: {
    color: "#ADADAD",
    fontWeight: "400",
    lineHeight: 18,
  },
  link: {
    color: baseTheme.COLORS.PRIMARY,
    fontWeight: "400",
    fontSize: 14,
    textDecorationLine: "underline",
    lineHeight: 24,
  },
  content: {
    color: "#A1A8B0",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    marginVertical: 4,
    letterSpacing: 0.2,
  },
  time: {
    color: "#858585",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 8,
  },

  banner: {
    // backgroundColor: '#eee',

    borderRadius: 12,
    marginVertical: 8,
  },
  input: {
    width: width * 0.9,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: baseTheme.COLORS.BORDER_COLOR,
    height: 59,
    backgroundColor: "transparent",
    paddingRight: 40,
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    width: width * 0.3,
    height: 32,
    borderRadius: 8,
  },
  buttonOutline: {
    width: width * 0.85,
    height: 42,
    borderRadius: 20,
    backgroundColor: baseTheme.COLORS.PRIMARY,
    elevation: 0,
    borderWidth: 1,
    borderColor: baseTheme.COLORS.PRIMARY,
  },
});
