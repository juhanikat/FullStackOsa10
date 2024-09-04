import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const [mutate, result] = useMutation(AUTHENTICATE)

    const signIn = async ({ username, password }) => {
        try {
            const { data } = await mutate({ variables: { credentials: { username, password } } })
            if (data) {
                await authStorage.setAccessToken(data.authenticate.accessToken)
                apolloClient.resetStore()
                console.log("Signed in, added token");
            }
        } catch (e) {
            throw new Error(e.message)
        }
    }
    return [signIn, result]
}

export default useSignIn