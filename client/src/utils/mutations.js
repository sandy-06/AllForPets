import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_Product =gql`
mutation addProduct($productData: ProductInput!) {
  addProduct(productData: $productData) {
    
      productId
      name
      image
      description
      price
      quantity
  }
}
`

export const SAVE_PRODUCTS = gql`
  mutation saveProduct($productData: ProductInput!) {
    saveProduct(productData: $productData) {
      _id
      username
      email
      savedProduct {
        productId
        name
        image
        description
        price
      
      }
    }
  }
`;

export const REMOVE_PRODUCT = gql`
  mutation removePRODUCT($productId: ID!) {
    removePRODUCT(productId: $productId) {
      _id
      username
      email
      savedProduct {
        productId
        name
        image
        description
        price
     
      }
    }
  }
`;
