import { server } from '@/app/mocks/server';
import { rest } from 'msw';
import todoGet from '../todo.get';

describe('TodoGet Function Testing', () => {
    it('should return the correct number of todo items', async () => {
        const todosArray = await todoGet();
        expect(todosArray.length).toBe(4);
    });

    it('should return an empty array with an error', async () => {
        server.use(
            rest.get('/todos', (req, res, ctx) => {
                return res(ctx.status(400));
            })
        );
        const todosArray = await todoGet();
        expect(todosArray.length).toBe(0);
    });
});
