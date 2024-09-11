import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW)

    const createReview = async ({ repoOwnerName, repoName, rating, review }) => {
        try {
            await mutate({ variables: { review: { ownerName: repoOwnerName, repositoryName: repoName, rating: rating, text: review } } })
        } catch (e) {
            throw new Error(e.message)
        }
    }
    return [createReview, result]
}

export default useCreateReview