import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy: orderBy, orderDirection: orderDirection },
    });
    return { data, error, loading }
};

export default useRepositories;