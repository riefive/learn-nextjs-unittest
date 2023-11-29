import type { TTodo } from '@/app/types/todo.type';

export default async function todoPost(item: string): Promise<TTodo> {
    const res = await fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: 1,
            title: item,
            completed: false,
        }),
    });
    if (!res.ok) throw Error('Failed to post new todo');
    return await res.json();
}
