import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View>
      <AppBar></AppBar>
      <View style={styles.container}>
        <Text>Rate Repository Application</Text>
        <RepositoryList></RepositoryList>
      </View>
    </View>
  );
};

export default Main;
