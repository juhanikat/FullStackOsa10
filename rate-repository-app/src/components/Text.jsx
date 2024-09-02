import { Text as NativeText, StyleSheet } from "react-native";
import { Platform } from "react-native";

import theme from "../theme";

let fontFamily = theme.fonts.main;
switch (Platform.OS) {
  case "android":
    fontFamily = theme.fonts.android;
    break;
  case "ios":
    fontFamily = theme.fonts.ios;
    break;
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: fontFamily,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  colorError: {
    color: theme.colors.error,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

const Text = ({ color, fontSize, fontWeight, textAlign, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    color === "error" && styles.colorError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    textAlign === "center" && styles.textAlignCenter,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
