import useCreateUser from "../hooks/useCreateUser";
import { useNavigate } from "react-router-native";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import useSignIn from "../hooks/useSignIn";

const SignUp = () => {
  const [createUser] = useCreateUser();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      await createUser({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      setErrorMsg(e.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };

  return <SignUpForm onSubmit={onSubmit} errorMsg={errorMsg} />;
};

export default SignUp;
