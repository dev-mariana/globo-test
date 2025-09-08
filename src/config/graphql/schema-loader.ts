import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { join } from "path";

const typeDefs = [
  readFileSync(join(__dirname, "video.graphql"), "utf8"),
  readFileSync(join(__dirname, "feedback.graphql"), "utf8"),
  readFileSync(join(__dirname, "query.graphql"), "utf8"),
  readFileSync(join(__dirname, "mutation.graphql"), "utf8"),
];

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {},
});
