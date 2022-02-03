const { Products } = require('../models');

const resolvers = {
    Query: {
        products: async (parent, { productType }) => {
            const params = productType;
            return Products.find(params);
        }
    },

    Mutation: {
        addProduct: async (parent, args) => {
            const product = await Products.create(args);

            return product;
        }
    }
}

module.exports = resolvers;