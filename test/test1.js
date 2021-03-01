import gql from 'apollo-server-express';

export const getDogsQuery = gql`
    query dogs {
         {
            id
            name
        }
    }
`;