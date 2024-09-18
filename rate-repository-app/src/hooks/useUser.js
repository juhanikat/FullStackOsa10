import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';


const useUser = (variables) => {
    const { data, loading, fetchMore, refetch } = useQuery(GET_CURRENT_USER, { variables: variables });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.me.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        user: data?.me,
        reviews: data?.me.reviews,
        fetchMore: handleFetchMore,
        refetch: refetch,
        loading
    };
};



export default useUser;