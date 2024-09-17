import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    padding: 15,
  },
  text: {
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.appBarLinks,
  },
  link: {
    marginHorizontal: 10,
  }

});

const AppBar = () => {
  const navigate = useNavigate();
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const { data, loading } = useQuery(GET_CURRENT_USER);

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
        <Pressable style={styles.link} onPressOut={() => navigate("/")}>
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
        {data.me === null && (
          <Pressable style={styles.link} onPressOut={() => navigate("/signup")}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        )}
        {data.me !== null && (
          <Pressable
            style={styles.link}
            onPressOut={() => navigate("/createreview")}
          >
            <Text style={styles.text}>Create a Review</Text>
          </Pressable>
        )}
        {data.me !== null && (
          <Pressable
            style={styles.link}
            onPressOut={() => navigate("/myreviews")}
          >
            <Text style={styles.text}>My Reviews</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
