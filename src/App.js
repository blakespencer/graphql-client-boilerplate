import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// We need to specify cache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
console.log(client);

client
  .query({
    query: gql`
      {
        users {
          firstName
          lastName
        }
      }
    `,
  })
  .then(result => console.log(result));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
