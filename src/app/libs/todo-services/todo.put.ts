import type { TTodo } from '@/app/types/todo.type';

export default async function todoPut(todo: TTodo): Promise<TTodo> {
    const res = await fetch(`/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...todo,
            completed: !todo.completed,
        }),
    });
    if (!res.ok) throw Error('Failed to update todo');
    const updatedTodo = await res.json();
    return updatedTodo;
}
