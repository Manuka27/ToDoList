import React from "react";

const Header = () => {
  return (
    <header className=" text-white p-6 shadow-lg">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="text-4xl font-bold">Lister Cat</h1>
          <img className="h-10 w-auto" src="/assets/logo.png" alt="Logo" />
        </div>
        <p className="text-gray-400 mt-2 text-lg italic">
          Your daily tasks, tracked with a purr-fect flow.
        </p>
      </div>
    </header>
  );
};

export default Header;
