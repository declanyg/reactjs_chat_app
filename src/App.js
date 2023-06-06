import { ChatEngine } from 'react-chat-engine';

import './App.css'
 
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height = "100vh"
            projectID = "ae7e0e8a-d90a-4969-973a-7d4d2becb9a7"
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = { (chatAppProps) => <ChatFeed { ... chatAppProps} /> }
        />
    ); 
} 

export default App;