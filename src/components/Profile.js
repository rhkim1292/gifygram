import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
	const navigate = useNavigate();

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, [setUser]);

	const handleLogout = () => {
		navigate('/login');
	};

	return (
		<div>
			<h1>Profile</h1>
			{user && (
				<div>
					<p>Name: {user.displayName}</p>
					<p>Email: {user.email}</p>
					<img src={user.photoURL} alt="User profile" />
					<button onClick={handleLogout}>Logout</button>
				</div>
			)}
		</div>
	);
};

export default Profile;
