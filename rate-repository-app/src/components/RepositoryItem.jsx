import { View, Text } from "react-native";
// DO NOT IMPORT FROM react-native-web !!
const RepositoryItem = ({ data }) => {
  return (
    <View>
      <Text>${data.fullName}</Text>
      <Text>{data.description}</Text>
      <Text>{data.language}</Text>
      <Text>{data.forksCount}</Text>
      <Text>{data.stargazersCount}</Text>
      <Text>{data.ratingAverage}</Text>
      <Text>{data.reviewCount}</Text>
      <Text>{data.ownerAvatarUrl}</Text>
    </View>
  );
};

export default RepositoryItem;
