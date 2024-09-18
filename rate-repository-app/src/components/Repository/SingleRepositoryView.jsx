import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../Review/ReviewItem";
import Text from "../Text";
import RepositoryItem from "./RepositoryItem";

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
  const { repository, reviews, loading, fetchMore } = useReviews({
    first: 3,
    id: id,
  });

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }

  const onEndReached = () => {
    fetchMore();
  };

  const usedReviews = reviews ? reviews.edges.map((edge) => edge.node) : [];
  return (
    <FlatList
      data={usedReviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ListFooterComponent={<View style={{ height: 200 }} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
    />
  );
};

export default SingleRepositoryView;
