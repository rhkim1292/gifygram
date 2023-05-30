import '../styles/Profile.css';

const Profile = ({ userData }) => {
	return (
		<div className="profile-container">
			<h1>Profile</h1>
			<div>
				<p>Name: {userData.current.displayName}</p>
				<p>Email: {userData.current.email}</p>
				<img src={userData.current.photoURL} alt="User profile" />
			</div>
		</div>
	);
};

export default Profile;
