import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  navigate,
  searchQuery,
  setSearchQuery,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      style={styles.container}
      data={repositoryNodes}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigate(`/repository/${item.id}`);
          }}
        >
          <RepositoryItem
            repository={item}
            showGithubBtn={false}
          ></RepositoryItem>
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={
        <Searchbar
          placeholder="Search repositories"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      }
      ListFooterComponent={<View style={{height: 200}}/>}
    />
  );
};

export default RepositoryListContainer;
