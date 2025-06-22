// src/components/TodoItemCard.jsx
import React from 'react';

const TodoItemCard = ({ todo }) => {
  const { title, task, priority } = todo;

  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-xl hover:scale-[1.02] transition">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 mt-2">{task}</p>
      <p className={`mt-2 font-semibold ${priority === 'Urgent' ? 'text-red-400' : 'text-blue-400'}`}>
        Priority: {priority}
      </p>
      <div className="flex gap-3 mt-4">
        <button className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white text-sm">✔ Complete</button>
        <button className="px-4 py-2 rounded bg-yellow-600 hover:bg-yellow-700 text-white text-sm">✏ Update</button>
        <button className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-sm">🗑 Delete</button>
      </div>
    </div>
  );
};

export default TodoItemCard;
