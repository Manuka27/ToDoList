import React from 'react';
import TodoItemCard from './TodoItemCard';

const TodoListCard = () => {
  const todos = [
    { id: 1, title: 'Project Submission', task: 'Submit DBMS project report', priority: 'Urgent' },
    { id: 2, title: 'Study Time', task: 'Read 2 chapters of networking', priority: 'General' },
  ];

  return (
    <div className="max-w-4xl mx-auto pb-6 grid gap-6 px-4">
      {todos.map((todo) => (
        <TodoItemCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListCard;
