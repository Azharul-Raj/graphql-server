import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });