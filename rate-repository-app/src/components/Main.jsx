import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import theme from "../theme";
import AppBar from "./AppBar";
import RepositoryList from "./Repository/RepositoryList";
import SingleRepositoryView from "./Repository/SingleRepositoryView";
import CreateReview from "./Review/CreateReview";
import MyReviews from "./Review/MyReviews";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createreview" element={<CreateReview />} />
          <Route path="/myreviews" element={<MyReviews />} />
          <Route path="/repository/:id" element={<SingleRepositoryView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </View>
  );
};

export default Main;
