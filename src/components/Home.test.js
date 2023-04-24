import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home component', () => {
	it('a text input field exists', () => {
		render(<Home />);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
