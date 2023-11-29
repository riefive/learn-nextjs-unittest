import { server } from '@/app/mocks/server';
import { rest } from 'msw';
import todoPut from '../todo.put';

const mockTodo = {
    userId: 1,
    title: 'testing 1 update',
    completed: false,
    id: 1,
};

describe('TodoPut Function Testing', () => {
    it('should return the updated todo item', async () => {
        const updatedTodo = await todoPut(mockTodo);
        expect(updatedTodo).toEqual({
            userId: 1,
            title: 'testing 1 update',
            completed: true,
            id: 1,
        });
    });

    it('should fail with an error', async () => {
        server.use(
            rest.put('/todos/1', (req, res, ctx) => {
                return res(ctx.status(400));
            })
        );
        expect.assertions(1);
        try {
            await todoPut(mockTodo);
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual('Failed to update todo');
            }
        }
    });
});
