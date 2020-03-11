import React from 'react';
import styled from 'styled-components';
import { History } from 'history';

import ChatsNavBar from './ChatsNavBar';
import ChatsList from './ChatsList';

const Container = styled.div`
    height: 100vh;
`;

interface ChatsListScreenProps {
    history: History
}

const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ history }) => {
    return (
        <Container>
            <ChatsNavBar />
            <ChatsList history={history} />
        </Container>
    );
}

export default ChatsListScreen;