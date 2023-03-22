import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar component', () => {
    it('render list and its items in navbar', () => {
        render(<Navbar />, { wrapper: Router });
        const itemList = screen.getAllByRole('listitem');
        expect(itemList[0].textContent).toMatch(/^gifygram$/i);
        expect(itemList[1].textContent).toMatch(/^Home$/i);
        expect(itemList[2].textContent).toMatch(/^Chat$/i);
    });
});
