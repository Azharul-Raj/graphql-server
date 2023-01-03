import Todo from '../schema/schema.js'

const resolvers = {
    Query: {
        async user(_, { ID }) {
            return await Todo.findById(ID)
        },
        async users() {
            return await Todo.find();
        }
    },
    Mutation: {
        async createUser(_, { userInput: { name, roll, isGood } }) {
            const createUser = new Todo({
                name: name,
                roll: roll,
                isGood: isGood,
                date:new Date().toISOString()
            })
            const res = await createUser.save()
            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteUser(_, { ID }) {
            const isDeleted = (await Todo.deleteOne({ _id: ID })).deleteCount;
            return isDeleted;
        }
    }
}
 
export default resolvers;