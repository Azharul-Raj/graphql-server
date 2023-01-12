
// import { ApolloServer } from "apollo-server";
const { ApolloServer } = require("apollo-server");
const typeDefs = require('./graphql/typeDef');
const resolvers = require('./graphql/resolvers');
const mongoose = require("mongoose");


mongoose.set('strictQuery', false);
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('mongodb connected');
    return server.listen({port:3001})
})
.then(res=>{
    console.log(`Apollo Server is running at ${res.url}`);
})