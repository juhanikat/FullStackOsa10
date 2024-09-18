import { useQuery } from '@apollo/client';
import { GET_REVIEW } from '../graphql/queries';


const useReviews = (variables) => {
    const { data, loading, fetchMore } = useQuery(GET_REVIEW, { variables: variables });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        repository: data?.repository,
        reviews: data?.repository.reviews,
        fetchMore: handleFetchMore,
        loading
    };
};



export default useReviews;