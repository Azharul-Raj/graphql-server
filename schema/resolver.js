

const resolvers = {
    Query: {
        users() {
            return [{
                id:1,
                name: 'Azharul RAJ',
                username: 'raj',
                age: 22,
                isGood:true
            }];
         }
     }
}
 
export default resolvers;