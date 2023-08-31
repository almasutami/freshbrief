import React from "react";
import { DatePicker } from "antd";
import MyComponent from "./components/MyComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <DatePicker />
        <MyComponent />
      </div>
    );
  }
}

export default App;
