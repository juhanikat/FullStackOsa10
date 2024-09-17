import { StyleSheet, View } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
});

const displayedStat = (stat) => {
  if (stat >= 1000) {
    const divided = stat / 1000;
    const newStat = `${Number(divided.toFixed(1))}k`;
    return newStat;
  }
  return stat;
};

const RepositoryStats = ({ repository }) => {
  const stats = {
    forksCount: displayedStat(repository.forksCount),
    stargazersCount: displayedStat(repository.stargazersCount),
    ratingAverage: displayedStat(repository.ratingAverage),
    reviewCount: displayedStat(repository.reviewCount),
  };

  return (
    <View style={styles.container}>
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
