import type { TTodo } from '@/app/types/todo.type';

export default async function todoGet() {
    try {
        const res = await fetch('/todos');
        const todos: TTodo[] = await res.json();
        return todos;
    } catch (err) {
        if (err instanceof Error) console.log(err.message);
        return [];
    }
}
