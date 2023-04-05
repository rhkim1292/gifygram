import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import gifygramLogo from '../images/gifygram-logo.png';

function Navbar(props) {
    return (
        <ul className="navbar">
            <li>
                <div className="logo-container">
                    <NavLink to="">
                        <img
                            className="gifygram-logo"
                            src={gifygramLogo}
                            alt="gifygram logo"
                        />
                    </NavLink>
                </div>
            </li>
            <li>
                <NavLink to="">Home</NavLink>
            </li>
            <li>
                <NavLink to="chat">Chat</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;
