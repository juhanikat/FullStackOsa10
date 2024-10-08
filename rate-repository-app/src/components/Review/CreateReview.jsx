import { useState } from "react";
import { useNavigate } from "react-router-native";
import useCreateReview from "../../hooks/useCreateReview";
import ReviewForm from "../Form/ReviewForm";

const CreateReview = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    try {
      const { repoOwnerName, repoName, rating, review } = values;
      const ratingAsNumber = Number(rating);
      const { data } = await createReview({
        repoOwnerName,
        repoName,
        rating: ratingAsNumber,
        review,
      });
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      setErrorMsg(e.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  };
  return <ReviewForm onSubmit={onSubmit} errorMsg={errorMsg} />;
};

export default CreateReview;
