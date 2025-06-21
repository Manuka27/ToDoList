import React from 'react';
import Header from './Header';
import ListHeader from './ListHeader';
import TodoListCard from './TodoListCard';
import CreateTask from './CreateTask';

function HomeMain() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <ListHeader />
      <CreateTask />
      <TodoListCard />
    </div>
  );
}

export default HomeMain;
