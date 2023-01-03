import { gql } from "apollo-server";

const typeDefs = gql`

type User {
    id:ID
    name:String!
    roll:Int!    
    isGood:Boolean
    date:String
}
input UserInput{
    name:String!
    roll:Int!
    isGood:Boolean
}

type Query{
    user:(ID:ID!):User!
    users:[User]!
}

type Mutation {
    createUser(userInput:UserInput):User!
    deleteUser(ID:ID!):Boolean
    editUser(ID:ID!,userInput:UserInput):Boolean
}
`

export default typeDefs;