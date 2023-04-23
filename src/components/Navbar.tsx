import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="m-4 flex justify-between items-center">
      <div className="flex text-3xl justify-center items-center font-extrabold">
        DevBazar
      </div>
      <div className="pl-4">
        <ul className="flex space-x-4 items-center justify-center">
          <li className="flex items-center justify-center rounded-full p-4 bg-gray-100">
            <UserOutlined />
          </li>
          <li className="flex items-center justify-center rounded-full p-4 bg-gray-100">
            <ShoppingCartOutlined />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
