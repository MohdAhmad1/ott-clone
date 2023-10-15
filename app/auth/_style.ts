import baseTheme from "@/theme/base-theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    height: 52,
    width: 52,
    marginBottom: 8,
    margin: 0,
    backgroundColor: "#fff",
  },

  button: {
    width: width * 0.9,
    height: 48,
    borderRadius: 20,
  },
  userImage: {
    resizeMode: "contain",
  },
  logo: {
    width: 132,
    resizeMode: "contain",
  },
  card: {
    backgroundColor: baseTheme.COLORS.BLACK,
    width: width,
    borderRadius: 0,
  },
  heading: {
    fontSize: 31,
    color: baseTheme.COLORS.PRIMARY,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: 2,
  },
  smHeading: {
    fontSize: 24,
    color: "#0D253C",
    fontWeight: "600",
    lineHeight: 30,
    paddingVertical: 12,
  },

  tabTextStyle: {
    color: baseTheme.COLORS.WHITE,
    fontSize: 16,
    fontWeight: "300",
    letterSpacing: 2,
    lineHeight: 24,
  },
  activeTabStyle: {
    backgroundColor: "#0D253C",
    paddingBottom: 16,
  },
  activeTabTextStyle: {
    color: baseTheme.COLORS.WHITE,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
  },
  tabStyle: {
    borderWidth: 0,
    backgroundColor: "#0D253C",
    paddingBottom: 16,
    marginTop: 22,
    marginBottom: 8,
    borderColor: "#ccc",
  },
  errors: {
    color: baseTheme.COLORS.DANGER,
    alignSelf: "flex-start",
    fontSize: 10,
  },
  loginError: {
    color: baseTheme.COLORS.DANGER,
    alignSelf: "center",
    fontSize: 14,
    marginBottom: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    color: baseTheme.COLORS.PRIMARY,
    fontWeight: "600",
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: "#041D69",
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  floatingText: {
    backgroundColor: "#000",
    position: "absolute",
    left: 24,
    paddingHorizontal: 7.5,
    zIndex: 999,
  },
});
