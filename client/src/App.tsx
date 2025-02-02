import React from 'react';
import {
    BrowserRouter,
    Route,
    Redirect,
    RouteComponentProps
} from 'react-router-dom';

import MyAnimatedSwitch from './components/AnimatedSwitch';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';

const App: React.FC = () => (
    <BrowserRouter>
        <MyAnimatedSwitch>
            <Route exact path="/chats" component={ChatsListScreen} />
            <Route
                exact
                path="/chats/:chatId"
                component={({
                    match,
                    history,
                }: RouteComponentProps<{ chatId: string }>) => (
                        <ChatRoomScreen chatId={match.params.chatId} history={history} />
                    )}
            />
        </MyAnimatedSwitch>
        <Route exact path="/" render={redirectToChats} />
    </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
