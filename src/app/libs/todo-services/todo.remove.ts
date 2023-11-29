import type { TTodo } from '@/app/types/todo.type';

export default async function todoRemove(todo: TTodo): Promise<Partial<TTodo>> {
    const res = await fetch(`/todos/${todo.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: todo.id,
        }),
    });
    if (!res.ok) throw Error('Failed to delete todo');
    return await res.json();
}
