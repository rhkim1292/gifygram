import '../styles/Profile.css';

const Profile = ({ user }) => {
	return (
		<div className="profile-container">
			<h1>Profile</h1>
			<div>
				<p>Name: {user.displayName}</p>
				<p>Email: {user.email}</p>
				<img src={user.photoURL} alt="User profile" />
			</div>
		</div>
	);
};

export default Profile;
