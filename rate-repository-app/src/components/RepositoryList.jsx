import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useRepositories();
  if (loading) {
    return <Text>Loading</Text>;
  } else if (error) {
    console.log(error);
    return <Text>{error}</Text>;
  }
  const repositories = data.repositories;
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={(item) => <RepositoryItem data={item.item}></RepositoryItem>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
