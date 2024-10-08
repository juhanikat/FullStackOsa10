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
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Password is required"),
});

export const LogInForm = ({ onSubmit, errorMsg }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={
          formik.touched.username && formik.errors.username
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color={"error"}>{formik.errors.username}</Text>
      )}
      <TextInput
        secureTextEntry
        style={
          formik.touched.password && formik.errors.password
            ? styles.errorTextInput
            : styles.textInput
        }
        placeholder="password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color={"error"}>{formik.errors.password}</Text>
      )}
      {errorMsg.length > 0 && <Text color={"error"}>{errorMsg}</Text>}
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text textAlign={"center"} color={"white"}>
          Submit
        </Text>
      </Pressable>
    </View>
  );
};
