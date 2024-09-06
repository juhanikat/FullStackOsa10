import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import RepositoryStats from "./RepositoryStats";
import { Linking } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.repositoryBackground,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    padding: 5,
  },
  languageContainer: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  githubBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
  },
});

const RepositoryItem = ({ data, showGithubBtn }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <Image style={styles.image} source={{ uri: data.ownerAvatarUrl }}></Image>
      <Text style={styles.text} fontWeight={"bold"} fontSize={"subheading"}>
        {data.fullName}
      </Text>
      <Text style={styles.text}>{data.description}</Text>
      <View style={styles.languageContainer}>
        <Text color={"white"} textAlign={"center"}>
          {data.language}
        </Text>
      </View>
      <RepositoryStats data={data}></RepositoryStats>
      {showGithubBtn && (
        <Pressable
          style={styles.githubBtn}
          onPress={() => Linking.openURL(data.url)}
        >
          <Text color={"white"}>Open in Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
