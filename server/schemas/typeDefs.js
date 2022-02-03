const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Products {
    _id: ID
    productName: String
    productType: String
    stock: Int
    price: Int
}

type Query {
    products(productType: String): [Products]
    product(productName: String!): Products
}

type Mutation {
    addProduct(productName: String!, productType: String!, stock: Int, price: Int!): Products
}
`;

module.exports = typeDefs;