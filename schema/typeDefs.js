import { gql } from "apollo-server";

const typeDefs = gql`

type User {
    name:String!
    username:String!
    age:Int!
    isGood:Boolean
}

type Query{
    users=[User!]!
}
`

export default typeDefs;