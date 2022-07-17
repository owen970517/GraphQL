import { ApolloServer , gql } from "apollo-server";

let tweets = [
    {
        id : 'owen',
        text :'hello',
    },
    {
        id : 'Lark',
        text : 'world'
    }
]

// type Query 가 존재해야지 서버 실행 가능 
// 유저가  나로 부터 데이터를 받도록 하고 싶다면 type Query 안에 있어야 함 
// 유저가 나한테 데이터를 보내고 그 데이터가 DB에 저장, 지우거나 업데이트 된다면 type Mutation 안에 있어야 함
// type 뒤에 느낌표 붙이면 무조건 존재해야 함 즉 null을 리턴하지 않음 , 느낌표가 존재하지 않으면 null 값이 될수도있다
const typeDefs = gql`
    type User {
        id : ID!  
        username : String!
        firstName : String!
        lastName : String
    }
    type Tweet {
        id : ID! 
        text : String!
        author : User
    }
    type Query {
        allTweets : [Tweet!]!
        tweet(id :ID!) : Tweet
    }
    type Mutation {
        postTweet(text:String!, userId :ID!) :Tweet!
        deleteTweet(id:ID!) :Boolean!
    }

`;

const resolvers = {
    Query : {
        tweet(root , {id}) {
            return tweets.find(tweet => tweet.id === id);
        },
        allTweets() {
            return tweets;
        }
    },
    Mutation : {
        postTweet(root , {text,userId}) {
            const newTweet = {
                id : userId,
                text
            };
            tweets.push(newTweet);
            return newTweet;
        },
        deleteTweet(root , {id}) {
            const tweet = tweets.find((tweet) => tweet.id === id);
            if (!tweet) return false;
            tweets =tweets.filter((tweet) => tweet.id !== id)
            return true;
        }
    }
}
const server = new ApolloServer({typeDefs , resolvers});

server.listen().then(({url}) => {
    console.log(`${url} 실행중`);
});