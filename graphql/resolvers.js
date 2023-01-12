const Recipe = require("../schema/models");
const { GraphQLError } = require("graphql");

module.exports = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID);
    },
    async getRecipes(_, { amount }) {
      return Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
      async createRecipe(_, { recipeInput: { name, description, thumbsUp } }) {
          let myCustomExtensions = "The data that you wanna store is in the recipe collection is exist from before"
          const message="This data is already exist"
      const isExist = await Recipe.find({ name: name });
          if (isExist.length) {
          
        throw new GraphQLError(message, {
            extensions: { code: 'YOUR_ERROR_CODE', myCustomExtensions },
          });
      }
      const createRecipe = new Recipe({
        name: name,
        description: description,
        createdAt: new Date().toISOString(),
        thumbsUp: thumbsUp,
        thumbsDown: 0,
      });
      const res = await createRecipe.save();
      return {
        // id: res.id,
        ...res._doc,
      };
    },
    async deleteRecipe(_, { ID }) {
      const isDeleted = await (
        await Recipe.deleteOne({ _id: ID })
      ).deletedCount;
      return isDeleted;
    },
    async editRecipe(_, { ID, recipeInput: { name, description,thumbsUp } }) {
      const isEdited = (
        await Recipe.updateOne({ _id: ID }, {name, description,thumbsUp })
      ).modifiedCount;
      return isEdited;
    },
  },
};
