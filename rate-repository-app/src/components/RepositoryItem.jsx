import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import RepositoryStats from "./RepositoryStats";

import theme from "../theme";
// DO NOT IMPORT FROM react-native-web !!

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
  languageContainer: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});

const RepositoryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.ownerAvatarUrl }}></Image>
      <Text fontWeight={"bold"}>{data.fullName}</Text>
      <Text>{data.description}</Text>
      <View style={styles.languageContainer}>
        <Text color={"white"} textAlign={"center"}>
          {data.language}
        </Text>
      </View>

      <RepositoryStats data={data}></RepositoryStats>
    </View>
  );
};

export default RepositoryItem;
