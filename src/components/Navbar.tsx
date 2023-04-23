import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="p-4 flex">
      <div className="flex-shrink bg-red-400">DevBazar</div>
      <div className="flex-grow bg-blue-400">world</div>
      <div className="flex-shrink bg-green-400">!</div>
    </div>
  );
};

export default Navbar;
