import React, { Component, Fragment } from 'react';
import './App.css';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
// This is the link to our server
const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

// We need to specify cache
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <div>Hello Jack</div>
            <Routes />
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
