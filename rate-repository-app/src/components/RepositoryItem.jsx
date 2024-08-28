import { View, Text } from "react-native-web";

const RepositoryItem = ({ data }) => {
  return (
    <View>
      <Text>
        <p>{data.fullName}</p>
        <p>{data.description}</p>
        <p>{data.language}</p>
        <p>{data.forksCount}</p>
        <p>{data.stargazersCount}</p>
        <p>{data.ratingAverage}</p>
        <p>{data.reviewCount}</p>
        <p>{data.ownerAvatarUrl}</p>
      </Text>
    </View>
  );
};

export default RepositoryItem;
