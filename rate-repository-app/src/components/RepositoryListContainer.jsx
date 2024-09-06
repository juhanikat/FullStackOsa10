import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={(item) => (
        <Pressable
          onPress={() => {
            navigate(`/repository/${item.item.id}`);
          }}
        >
          <RepositoryItem
            data={item.item}
            showGithubBtn={false}
          ></RepositoryItem>
        </Pressable>
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryListContainer;
