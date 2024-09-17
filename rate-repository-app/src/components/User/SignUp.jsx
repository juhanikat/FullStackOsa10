import { useState } from "react";
import { useNavigate } from "react-router-native";
import useCreateUser from "../../hooks/useCreateUser";
import useSignIn from "../../hooks/useSignIn";
import SignUpForm from "../Form/SignUpForm";

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
