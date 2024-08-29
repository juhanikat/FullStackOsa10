import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, Navigate, useNavigate } from "react-router-native";

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
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable onPressOut={() => navigate("/")}>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
        <Pressable onPressOut={() => navigate("/signin")}>
          <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
