import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <ul className="navbar">
            <li>
                <h3>gifygram</h3>
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
