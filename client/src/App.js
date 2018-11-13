import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Launches from './components/Launches';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} style={{width: '30vw', display: 'block', margin: 'auto'}} alt="SpaceX"/>
        <Launches />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
