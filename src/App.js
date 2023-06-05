import { ChatEngine } from 'react-chat-engine';

import './App.css'; 
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height = "100vh"
            projectID = "ae7e0e8a-d90a-4969-973a-7d4d2becb9a7"
            userName = "Baaa"
            userSecret = "123456"
            renderChatFeed = { (chatAppProps) => <ChatFeed {... chatAppProps} /> }
        />
    ); 
}

export default App;