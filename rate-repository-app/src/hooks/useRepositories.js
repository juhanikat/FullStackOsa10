import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = (variables) => {
    const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, { variables: variables, fetchPolicy: 'cache-and-network', });
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }
        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        repositories: data?.repositories,
        fetchMore: handleFetchMore,
        loading
    };
};



export default useRepositories;