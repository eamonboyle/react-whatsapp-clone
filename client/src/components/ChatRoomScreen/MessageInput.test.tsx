import { createMemoryHistory } from 'history';
import React from 'react';
import {
    cleanup,
    render,
    fireEvent,
    wait,
    waitForElement,
} from '@testing-library/react';
import MessageInput from './MessageInput';

describe('MessageInput;', () => {
    afterEach(cleanup);
    
    it('triggers callback on send button click', async () => {
        const onSendMessage = jest.fn(() => { });
        {
            const { container, getByTestId } = render(
                <MessageInput onSendMessage={onSendMessage} />
            );
            const messageInput = getByTestId('message-input');
            const sendButton = getByTestId('send-button');
            fireEvent.change(messageInput, { target: { value: 'foo' } });
            await waitForElement(() => messageInput);
            fireEvent.click(sendButton);
            await wait(() => expect(onSendMessage.mock.calls.length).toBe(1));
        }
    });

    it('triggers callback on Enter press', async () => {
        const onSendMessage = jest.fn(() => { });
        {
            const { container, getByTestId } = render(
                <MessageInput onSendMessage={onSendMessage} />
            );
            const messageInput = getByTestId('message-input');
            fireEvent.change(messageInput, { target: { value: 'foo' } });
            await waitForElement(() => messageInput);
            fireEvent.keyPress(messageInput, {
                key: 'Enter',
                code: 13,
                charCode: 13,
            });
            await wait(() => expect(onSendMessage.mock.calls.length).toBe(1));
        }
    });
});