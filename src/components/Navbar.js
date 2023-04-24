import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gifygramLogo from '../images/gifygram-logo.png';
import { faHouse, faComment } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
	const { pathname } = useLocation();

	useEffect(() => {
		const navLinks = document.querySelectorAll('ul.navbar a');
		for (const link of navLinks) {
			if (pathname === '/') {
				if (link.getAttribute('href') === '/gifygram') {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			} else {
				if (link.getAttribute('href') === '/gifygram' + pathname) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			}
		}
	});

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
				<NavLink to="">
					<div className="nav-btn">
						<FontAwesomeIcon icon={faHouse} />
						Home
					</div>
				</NavLink>
			</li>
			<li>
				<NavLink to="chat">
					<div className="nav-btn">
						<FontAwesomeIcon icon={faComment} />
						Chat
					</div>
				</NavLink>
			</li>
		</ul>
	);
}

export default Navbar;
