import Text from "./Text";
import theme from "../theme";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statContainer: {},
});

const displayedStat = (stat) => {
  if (stat >= 1000) {
    const divided = stat / 1000;
    const newStat = `${Number(divided.toFixed(1))}k`;
    return newStat;
  }
  return stat;
};

const RepositoryStats = ({ data }) => {
  const stats = {
    forksCount: displayedStat(data.forksCount),
    stargazersCount: displayedStat(data.stargazersCount),
    ratingAverage: displayedStat(data.ratingAverage),
    reviewCount: displayedStat(data.reviewCount),
  };

  return (
    <View style={styles.flexContainer}>
      <View>
        <Text fontWeight={"bold"}>Stars</Text>
        <Text>{stats.stargazersCount}</Text>
      </View>
      <View>
        <Text fontWeight={"bold"}>Forks</Text>
        <Text>{stats.forksCount}</Text>
      </View>
      <View>
        <Text fontWeight={"bold"}>Reviews</Text>
        <Text>{stats.reviewCount}</Text>
      </View>
      <View>
        <Text fontWeight={"bold"}>Rating</Text>
        <Text>{stats.ratingAverage}</Text>
      </View>
    </View>
  );
};

export default RepositoryStats;
