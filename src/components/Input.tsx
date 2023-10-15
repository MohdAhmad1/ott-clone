import baseTheme from "@/theme/base-theme";
import { Input, InputProps } from "galio-framework";
import PropTypes from "prop-types";
import React from "react";
import { StyleSheet } from "react-native";

function ArInput(props: InputProps) {
  const { shadowless, success, error } = props;

  const inputStyles = [
    styles.input,
    !shadowless && styles.shadow,
    success && styles.success,
    error && styles.error,
    { ...props.style },
  ];

  return (
    <Input
      style={inputStyles}
      color={"#fff"}
      placeholderTextColor="#A1A1A1"
      {...props}
    />
  );
}

ArInput.defaultProps = {
  shadowless: false,
  success: false,
  error: false,
};

ArInput.propTypes = {
  shadowless: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: baseTheme.COLORS.BORDER_COLOR,
    height: 59,
    backgroundColor: "transparent",
    paddingLeft: 16,
    color: "#fff",
  },
  success: {
    borderColor: baseTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: baseTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: baseTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 0,
  },
});

export { ArInput as Input };
