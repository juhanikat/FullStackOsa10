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
  },
  text: {
    color: theme.colors.textAppBar,
  },
});

const AppBar = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data, error, loading } = useQuery(CURRENTLY_SIGNED_IN);

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    console.log("Signed out, removed token");
  };
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable onPressOut={() => navigate("/")}>
          <Text style={styles.text}>Repositories</Text>
        </Pressable>
        {data.me === null ? (
          <Pressable onPressOut={() => navigate("/signin")}>
            <Text style={styles.text}>Sign In</Text>
          </Pressable>
        ) : (
          <Pressable onPressOut={() => signOut()}>
            <Text style={styles.text}>Sign Out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
