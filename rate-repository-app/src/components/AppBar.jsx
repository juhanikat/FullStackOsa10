import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { useQuery } from "@apollo/client";
import { CURRENTLY_SIGNED_IN } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    margin: 5,
    padding: 10
  },
  text: {
    color: theme.colors.textAppBar,
    fontSize: theme.fontSizes.appBarLinks
  },
  link: {
    marginHorizontal: 10,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data, loading } = useQuery(CURRENTLY_SIGNED_IN);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log("Signed out, removed token");
  };
  if (loading) {
    return <Text>Loading appbar...</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollview}>
        <Pressable onPressOut={() => navigate("/")}>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
        {data.me === null ? (
          <Pressable style={styles.link} onPressOut={() => navigate("/signin")}>
            <Text style={styles.text}>Sign In</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.link} onPressOut={() => signOut()}>
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
