
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolver.js";
import mongoose from 'mongoose';


mongoose.set('strictQuery', false);
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('mongodb connected');
    return server.listen({port:3001})
})
.then(res=>{
    console.log(`Apollo Server is running at ${res.url}`);
})