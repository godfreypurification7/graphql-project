import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
//type
import { typeDefs } from "./schema.js";
import db from "./_db.js";
//server setup
const resolvers   ={
    Query: {
        games(){
            return db.games
        },
        game(_, args){
            return db.games.find((game)=>game.id===args.id)
        },
        authors(){
            return db.authors
        },
        author(_, args){
            return db.authors.find((author)=>author.id===args.id)
        }, 
        reviews(){
            return db.reviews
        },
        review(_, args){
            return db.reviews.find((review)=>review.id===args.id)
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((r)=>r.game_id===parent.id)

        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r)=>r.author_id===parent.id)

        }

    },
    Review:{
        author(parent){
            return db.authors.find((a)=>a.id===parent.author_id)
        },
        game(parent){
            return db.games.find((g)=>g.id===parent.game_id)

    }
},
Mutation: {
    addGame(_, args) {
        const game = {
            ...args.game,
            id: Math.floor(Math.random() * 10000).toString()
        };
        db.games.push(game);  // add to your in-memory DB
        return game;           // return the newly created game
    },
    deleteGame(_, args) {
        db.games = db.games.filter(g => g.id !== args.id);
        return db.games;
    },
    updateGame(_, args) {
    db.games = db.games.map((g) => {
        if (g.id === args.id) {
            return { ...g, ...args.edits }; // <-- fixed typo
        }
        return g;
    });
    return db.games.find((g) => g.id === args.id);
}

}

}
const server= new ApolloServer({
    typeDefs,
    resolvers
})
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at", url);

// https://www.youtube.com/watch?v=5199E50O7SI 45
// https://www.apollographql.com/docs/apollo-server/getting-started