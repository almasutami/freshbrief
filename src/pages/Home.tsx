import React from "react";

interface Props {
  name: string;
}

const HomePage: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>This is home page</h1>
    </div>
  );
};

export default HomePage;
