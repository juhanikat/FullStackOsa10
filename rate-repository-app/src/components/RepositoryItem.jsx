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
    marginVertical: 10
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
    marginVertical: 5,
    margin: 5,
  },
  githubBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginVertical: 10,
    alignSelf: "center",
  },
});

const RepositoryItem = ({ repository, showGithubBtn }) => {
  return (
    <View key={repository.id} testID="repositoryItem" style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: repository.ownerAvatarUrl }}
      ></Image>
      <Text style={styles.text} fontWeight={"bold"} fontSize={"subheading"}>
        {repository.fullName}
      </Text>
      <Text style={styles.text}>{repository.description}</Text>
      <View style={styles.languageContainer}>
        <Text color={"white"} textAlign={"center"}>
          {repository.language}
        </Text>
      </View>
      <RepositoryStats repository={repository}></RepositoryStats>
      {showGithubBtn && (
        <Pressable
          style={styles.githubBtn}
          onPress={() => Linking.openURL(repository.url)}
        >
          <Text color={"white"}>Open in Github</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
