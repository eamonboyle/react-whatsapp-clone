import gql from 'graphql-tag';
import * as fragments from '../fragments';

export default gql`
    subscription messageAdded {
        messageAdded {
            ...Message
        }
    }
    ${fragments.message}
`;