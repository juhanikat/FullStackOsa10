import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection, searchQuery }) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchQuery },
    });
    return { data, error, loading }
};

export default useRepositories;