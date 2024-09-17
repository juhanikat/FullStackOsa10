import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"

const useDeleteReview = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW)

    const deleteReview = async ({ id }) => {
        const { data, error } = await mutate({ variables: { deleteReviewId: id } })
        if (error) {
            throw new Error(error.message)
        }
        console.log("Deleted review");
        return data
    }
    return [deleteReview, result]
}

export default useDeleteReview