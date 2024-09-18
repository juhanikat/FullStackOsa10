import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import { useDebounce } from "use-debounce";
import useRepositories from "../../hooks/useRepositories";
import Text from "../Text";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [sortingMode, setSortingMode] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const navigate = useNavigate();

  const onEndReached = () => {
    fetchMore();
  };

  const { repositories, error, loading, fetchMore } = useRepositories({
    first: 5,
    orderBy,
    orderDirection,
    searchQuery: debouncedSearchQuery,
  });
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
      <RepositoryListContainer
        repositories={repositories}
        navigate={navigate}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onEndReached={onEndReached}
      />
    </>
  );
};

export default RepositoryList;
