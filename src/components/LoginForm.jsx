import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
         e.preventDefault();

         const authObject = { 'Project-ID':  "ae7e0e8a-d90a-4969-973a-7d4d2becb9a7", "User-Name": username, "User-Secret": password };

         try {
            //Checks credentials by sending auth object as header
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })

            //Saves the username and password locally if it is successful
            localStorage.setItem('username', username);
            localStorage.setItem('password', password); 

            //Reloads the page
            window.location.reload();
         } catch (error) {
            setError('Oops, incorrect credentials');
         }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;