import React from "react";
import { DatePicker } from "antd";

interface Props {
  name: string;
}

const NavBar: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <DatePicker />
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default NavBar;
