import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import Text from "./Text";
import { FlatList } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
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
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
  });

  if (loading) {
    return <Text>Loading reviews...</Text>;
  }
  const reviews = data ? data.me.reviews.edges.map((edge) => edge.node) : [];
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} partOfList={true} refetch={refetch} />}
      keyExtractor={(item) => item.id}
      ListFooterComponent={<View style={{ height: 200 }} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviews;
