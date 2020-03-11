import React, { useCallback } from 'react';
import { Toolbar, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { History } from 'history';
import styled from 'styled-components';
import { ChatQueryResult } from './index';

const Container = styled(Toolbar)`
    padding: 0;
    display: flex;
    flex-direction: row;
    background-color: var(--primary-bg);
    color: var(--primary-text);
`;

const BackButton = styled(Button)`
    svg {
        color: var(--primary-text)
    }
`;

const Picture = styled.img`
    height: 40px;
    width: 40px;
    margin-top: 3px;
    margin-left: -22px;
    object-fit: cover;
    padding: 5px;
    border-radius: 50%;
`;

const Name = styled.div`
    line-height: 56px;
`;

interface ChatNavBarProps {
    history: History,
    chat: ChatQueryResult
}

const ChatNavBar: React.FC<ChatNavBarProps> = ({ history, chat }) => {
    const navBack = useCallback(() => {
        history.replace('/chats');
    }, [history]);

    return (
        <Container>
            <BackButton data-testid="back-button" onClick={navBack}>
                <ArrowBackIcon />
            </BackButton>
            <Picture data-testid="chat-picture" src={chat.picture} />
            <Name data-testid="chat-name">{chat.name}</Name>
        </Container>
    );
}

export default ChatNavBar;