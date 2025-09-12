import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import { app } from "~/app";
import { schema } from "./schema-loader";

export async function createApolloServer() {
  try {
    const apolloServer = new ApolloServer({ schema });

    await apolloServer.start();

    app.use("/graphql", expressMiddleware(apolloServer));

    console.log("Apollo Server created!");

    return apolloServer;
  } catch (error) {
    console.error("Error creating Apollo Server.", error);
  }
}
