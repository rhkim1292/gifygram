import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Chat from './components/Chat.js';
import Navbar from './components/Navbar.js';
import './styles/App.css';

//  AIzaSyBJOOwPOsBC3X1eeG_DphyGLUbxexnyzqU 

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="chat" element={<Chat />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
