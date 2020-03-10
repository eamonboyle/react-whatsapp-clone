import React from 'react';
import styled from 'styled-components';

import ChatsNavBar from './ChatsNavBar';
import ChatsList from './ChatsList';

const Container = styled.div`
    height: 100vh;
`;

const ChatsListScreen: React.FC = () => {
    return (
        <Container>
            <ChatsNavBar />
            <ChatsList />
        </Container>
    );
}

export default ChatsListScreen;