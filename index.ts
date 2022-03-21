import { ApolloServer, gql } from "apollo-server";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { PrismaClient } from "@prisma/client";

const server = new ApolloServer({ typeDefs, resolvers });
export const prisma = new PrismaClient();

server
  .listen()
  .then(({ url }) => {
    console.log(`Server running at: ${url}`);
  })
  .catch((e) => {
    console.log(e);
  });
