import { render, screen } from '@testing-library/react';
import Header from '../header';

describe('Header Component Test', () => {
    it('should render the "Next Todos" heading', () => {
        render(<Header title='Next Todos' />);

        const header = screen.getByRole('heading', {
            name: 'Next Todos',
        });

        expect(header).toBeInTheDocument();
    });
});
