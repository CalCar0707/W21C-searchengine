const { Class } = rewuire('../models');

const resolvers = {
    Query: {
        classes: async () => {
            return await Class.find({});
        },
    },
};

module.exports = resolvers;