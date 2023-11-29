import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoAdd from '../todo.add';
import React from 'react';

const mockSetTodos = jest.fn();

describe('TodoAdd Component Test', () => {
    describe('Render', () => {
        it('should render the input', () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');

            expect(input).toBeInTheDocument();
        });

        it('should render a disabled submit button', () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const button = screen.getByRole('button', {
                name: 'Submit',
            });

            expect(button).toBeDisabled();
        });
    });

    describe('Behavior', () => {
        it('should be able to add text to the input', async () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'hey there');
            expect(input).toHaveValue('hey there');
        });

        it('should enable the submit button when text is input', async () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'hey there');

            const button = screen.getByRole('button', {
                name: 'Submit',
            });

            expect(button).toBeEnabled();
        });

        it('should empty the text input when submitted', async () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'hey there');
            const button = screen.getByRole('button', {
                name: 'Submit',
            });
            await userEvent.click(button);

            expect(input).toHaveValue('');
        });

        it('should call setTodos when submitted', async () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'hey there');
            const button = screen.getByRole('button', {
                name: 'Submit',
            });
            await userEvent.click(button);

            expect(mockSetTodos).toBeCalled();
        });

        it('should call setTodos when submitted', async () => {
            render(<TodoAdd setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'hey there');
            const button = screen.getByRole('button', {
                name: 'Submit',
            });
            await userEvent.click(button);

            expect(mockSetTodos).toBeCalled();
        });

        it('should call setTodos with previous data', async () => {
            const mockData = [
                {
                    userId: 1,
                    title: 'testing',
                    completed: false,
                    id: 1,
                },
            ];
            jest.spyOn(React, 'useState').mockReturnValueOnce([
                null,
                jest.fn(),
            ]);
            const [todo, setTodos] = React.useState(mockData);

            render(<TodoAdd setTodos={setTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'testing todo');
            const button = screen.getByRole('button', {
                name: 'Submit',
            });
            await userEvent.click(button);

            expect(setTodos).toBeCalled();
        });
    });
});
