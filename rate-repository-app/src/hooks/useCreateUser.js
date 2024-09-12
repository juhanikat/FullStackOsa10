import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"

const useCreateUser = () => {
    const [mutate, result] = useMutation(CREATE_USER)

    const createUser = async ({ username, password }) => {
        const { data, error } = await mutate({ variables: { user: { username, password } } })
        if (error) {
            throw new Error(error.message)
        }
        console.log("Added new user");
        return data
    }
    return [createUser, result]
}

export default useCreateUser