import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolver.js"

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`Apollo Server is running ${url}`);
})
    .catch(err => console.log(err.message));