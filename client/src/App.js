import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              style={{ width: "30vw", display: "block", margin: "auto" }}
              alt="SpaceX"
            />
            <Route exact path="/" component={Launches}></Route>
            <Route path="/launch/:flight_number" component={Launch}></Route>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
