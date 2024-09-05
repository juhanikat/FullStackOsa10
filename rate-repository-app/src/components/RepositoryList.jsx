import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { data, error, loading } = useRepositories();
  if (loading) {
    return <Text>Loading repositories...</Text>;
  } else if (error) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }
  return <RepositoryListContainer repositories={data.repositories} />;
};

export default RepositoryList;
