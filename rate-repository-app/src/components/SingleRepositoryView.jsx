import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";
import Text from "./Text";

const SingleRepositoryView = () => {
  const id = useParams().id;
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id: id },
  });
  if (loading) {
    return <Text>Loading repository...</Text>;
  }
  return <RepositoryItem data={data.repository} showGithubBtn={true} />;
};

export default SingleRepositoryView;
