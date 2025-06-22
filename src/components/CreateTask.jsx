import React, { useState } from 'react';

const CreateTask = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-center my-10">
      <button
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded shadow"
        onClick={() => setShowForm(true)}
      >
        + Create Task
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-8 rounded-xl w-96 shadow-2xl relative">
            <h2 className="text-2xl font-bold mb-4">New Task</h2>
            <input className="w-full mb-4 p-2 rounded bg-gray-700 text-white" placeholder="Title" />
            <textarea className="w-full mb-4 p-2 rounded bg-gray-700 text-white" placeholder="Task description"></textarea>
            <select className="w-full mb-4 p-2 rounded bg-gray-700 text-white">
              <option>Urgent</option>
              <option>General</option>
            </select>
            <div className="flex justify-end gap-4">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-600 rounded">Cancel</button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
