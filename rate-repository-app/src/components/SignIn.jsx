import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { LogInForm } from "./LogInForm";
import { useState } from "react";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      setErrorMsg(e.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };

  return <LogInForm onSubmit={onSubmit} errorMsg={errorMsg} />;
};

export default SignIn;
