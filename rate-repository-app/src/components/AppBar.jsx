import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  text: {
    color: theme.colors.textAppBar,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      {
        <Pressable onPress={""}>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
      }
    </View>
  );
};

export default AppBar;
