import { FlatList, StyleSheet, View } from "react-native";
import useUser from "../../hooks/useUser";
import Text from "../Text";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  container: {},
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const MyReviews = () => {
  const { user, reviews, loading, refetch } = useUser({
    includeReviews: true,
  });

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }
  if (user === null) {
    return <Text>Please sign in first.</Text>;
  }
  const usedReviews = reviews ? reviews.edges.map((edge) => edge.node) : [];
  return (
    <FlatList
      data={usedReviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} partOfList={true} refetch={refetch} />
      )}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ height: 200 }} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
