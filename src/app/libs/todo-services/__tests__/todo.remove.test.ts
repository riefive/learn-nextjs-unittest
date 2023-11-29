import { server } from '@/app/mocks/server';
import { rest } from 'msw';
import todoRemove from '../todo.remove';

const mockTodo = {
    userId: 1,
    title: 'testing 1 update',
    completed: false,
    id: 1,
};

describe('TodoPut Function Testing', () => {
    it('should return the deleted todo id', async () => {
        const deletedTodo = await todoRemove(mockTodo);
        expect(deletedTodo).toEqual({
            id: 1,
        });
    });

    it('should fail with an error', async () => {
        server.use(
            rest.delete('/todos/1', (req, res, ctx) => {
                return res(ctx.status(400));
            })
        );
        expect.assertions(1);
        try {
            await todoRemove(mockTodo);
        } catch (e) {
            if (e instanceof Error) {
                expect(e.message).toEqual('Failed to delete todo');
            }
        }
    });
});
