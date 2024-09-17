import { useFormik } from "formik";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import * as yup from "yup";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 120,
    padding: 10,
  },
  errorTextInput: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: "red",
  },
  textInput: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
  },
  button: {
    backgroundColor: theme.colors.blue,
    borderRadius: 5,
    width: 70,
    padding: 5,
    alignSelf: "center",
  },
});

const initialValues = {
  repoOwnerName: "",
  repoName: "",
  rating: "",
  review: "",
};

const validationSchema = yup.object().shape({
  repoOwnerName: yup
    .string()
    .min(3, "Repository owner name must be at least 3 characters long")
    .required("Repository owner name is required"),
  repoName: yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Repository name is required"),
  rating: yup
    .number()
    .min(0, "rating cannot be less than 0")
    .max(100, "rating cannot be greater than 100")
    .required("Rating is required"),
  review: yup.string(),
});

export const ReviewForm = ({ onSubmit, errorMsg }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={
          formik.touched.repoOwnerName && formik.errors.repoOwnerName
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="Repository owner name"
        value={formik.values.repoOwnerName}
        onChangeText={formik.handleChange("repoOwnerName")}
      />
      {formik.touched.repoOwnerName && formik.errors.repoOwnerName && (
        <Text color={"error"}>{formik.errors.repoOwnerName}</Text>
      )}
      <TextInput
        style={
          formik.touched.repoName && formik.errors.repoName
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="repoName"
        value={formik.values.repoName}
        onChangeText={formik.handleChange("repoName")}
      />
      {formik.touched.repoName && formik.errors.repoName && (
        <Text color={"error"}>{formik.errors.repoName}</Text>
      )}
      <TextInput
        style={
          formik.touched.rating && formik.errors.rating
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="rating"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text color={"error"}>{formik.errors.rating}</Text>
      )}
      <TextInput
        style={
          formik.touched.review && formik.errors.review
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="review"
        value={formik.values.review}
        onChangeText={formik.handleChange("review")}
      />
      {formik.touched.review && formik.errors.review && (
        <Text color={"error"}>{formik.errors.review}</Text>
      )}

      {errorMsg.length > 0 && <Text color={"error"}>{errorMsg}</Text>}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text textAlign={"center"} color={"white"}>
          Create Review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
