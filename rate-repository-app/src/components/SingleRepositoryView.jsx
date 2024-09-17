import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client";
import { GET_REVIEW, GET_SINGLE_REPOSITORY } from "../graphql/queries";
import Text from "./Text";
import { FlatList } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} showGithubBtn={true} />;
};

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const SingleRepositoryView = () => {
  const id = useParams().id;
  if (id === undefined) {
    return <Text>No id found in url</Text>;
  }
  const repositoryResult = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { id: id },
  });
  const reviewResult = useQuery(GET_REVIEW, {
    variables: { id: id },
  });

  if (repositoryResult.loading) {
    return <Text>Loading repository...</Text>;
  }
  if (reviewResult.loading) {
    return <Text>Loading reviews...</Text>;
  }
  const repository = repositoryResult.data.repository;
  const reviews = reviewResult
    ? reviewResult.data.repository.reviews.edges.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListFooterComponent={<View style={{ height: 200 }} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepositoryView;
