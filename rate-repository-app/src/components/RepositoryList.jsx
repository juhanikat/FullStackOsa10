import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import RepositoryListContainer from "./RepositoryListContainer";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [sortingMode, setSortingMode] = useState(0);

  const { data, error, loading } = useRepositories({ orderBy, orderDirection });
  if (loading) {
    return <Text>Loading repositories...</Text>;
  } else if (error) {
    console.log(error);
    return <Text>{error.message}</Text>;
  }

  return (
    <>
      <Picker
        selectedValue={sortingMode}
        onValueChange={(itemValue) => {
          setSortingMode(itemValue);
          if (itemValue === "0") {
            setOrderBy("CREATED_AT");
            setOrderDirection("DESC");
          }
          if (itemValue === "1") {
            setOrderBy("RATING_AVERAGE");
            setOrderDirection("DESC");
          }
          if (itemValue === "2") {
            setOrderBy("RATING_AVERAGE");
            setOrderDirection("ASC");
          }
        }}
      >
        <Picker.Item label="Latest repositories" value={"0"} />
        <Picker.Item label="Highest rated repositories" value={"1"} />
        <Picker.Item label="Lowest rated repositories" value={"2"} />
      </Picker>
      <RepositoryListContainer repositories={data.repositories} />
    </>
  );
};

export default RepositoryList;
