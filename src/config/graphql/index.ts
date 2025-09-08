import { ApolloServer } from "apollo-server";
import { schema } from "./schema-loader";

export async function createApolloServer() {
  try {
    const apolloServer = await new ApolloServer({ schema });

    console.log("Apollo Server created!");

    return apolloServer;
  } catch (error) {
    console.error("Error creating Apollo Server.", error);
  }
}
