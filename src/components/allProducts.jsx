import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_PRODUCTS = gql`
  {
    products {
      name
    }
  }
`;

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    };
  }

  handleSelect(evt) {
    this.setState({ selected: evt.target.value });
  }

  render() {
    console.log(this.props);
    return (
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              {data.products.map(product => (
                <div key={product.id} value={product.name}>
                  {product.name}
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default AllProducts;
