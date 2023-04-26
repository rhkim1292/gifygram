import { useState } from 'react';
import { db } from '../index.js';

const Username = ({ user }) => {
	const [username, setUsername] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		db.collection('users').doc(user.uid).set({
			username: username,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Username;
