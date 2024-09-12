import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client";
import { GET_REVIEW, GET_SINGLE_REPOSITORY } from "../graphql/queries";
import Text from "./Text";
import { FlatList } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { format } from "date-fns";

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: theme.colors.repositoryBackground,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  ratingCircle: {
    borderStyle: "solid",
    borderColor: theme.colors.ratingCircle,
    borderWidth: 5,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginHorizontal: 50,
  },
  separator: {
    height: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  return <RepositoryItem repository={repository} showGithubBtn={true} />;
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingCircle}>
        <Text color={"blue"}>{review.node.rating}</Text>
      </View>
      <View>
        <Text>{review.node.user.username}</Text>
        <Text>{format(review.node.createdAt, "PPPPpppp")}</Text>
        <Text style={{ flexWrap: "wrap" }}>{review.node.text}</Text>
      </View>
    </View>
  );
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
  const reviews = reviewResult.data.repository.reviews.edges;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem key={item.node.id} review={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepositoryView;
