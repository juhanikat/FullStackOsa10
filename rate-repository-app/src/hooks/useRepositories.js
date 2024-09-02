import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    // Replace the IP address part with your own IP address!
    const { data, error, loading } = useQuery(GET_REPOSITORIES);
    return { data, error, loading }
};

export default useRepositories;