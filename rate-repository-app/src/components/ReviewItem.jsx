import Text from "./Text";
import { Pressable, View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";
import { format } from "date-fns";
import { Linking } from "react-native";
import { Alert } from "react-native";
import useDeleteReview from "../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    borderRadius: 5,
    backgroundColor: theme.colors.repositoryBackground,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  fullReviewContainer: {
    flexDirection: "row",
    flex: 1,
    margin: 10,
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
    marginHorizontal: 20,
  },
  reviewTextContainer: {
    flexDirection: "column",
    flex: 1,
  },
  reviewText: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    margin: 10,
  },
  repoButton: {
    backgroundColor: theme.colors.blue,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: theme.colors.red,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
});

const ReviewItem = ({ review, partOfList, refetch }) => {
  const [deleteReview] = useDeleteReview();

  const onDelete = async () => {
    try {
      const id = review.id;
      await deleteReview({ id });
      refetch();
    } catch (e) {
      console.log(e);
      console.log(e.message);
    }
  };

  const deletionAlert = () => {
    Alert.alert(
      "Delete review?",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Delete", onPress: () => onDelete() },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.fullReviewContainer}>
        <View style={styles.ratingCircle}>
          <Text color={"blue"}>{review.rating}</Text>
        </View>
        <View style={styles.reviewTextContainer}>
          <Text style={styles.reviewText} fontWeight={"bold"}>
            {partOfList ? review.repository.fullName : review.user.username}
          </Text>
          <Text style={styles.reviewText}>
            {format(review.createdAt, "GGGG-d-M-yyyy")}
          </Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {partOfList === true && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.repoButton}
            onPressOut={() => Linking.openURL(review.repository.url)}
          >
            <Text color={"white"} textAlign={"center"}>
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={styles.deleteButton}
            onPressOut={() => deletionAlert()}
          >
            <Text color={"white"} textAlign={"center"}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
