import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <NavBar name={"Almas"} />
            <Route path="/home" component={Home} />
            <Route path="/article" component={Article} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
