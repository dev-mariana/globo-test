import cors from "cors";
import express from "express";
import { connection } from "./config/database/mongo";
import { createApolloServer } from "./config/graphql";

export const app = express();

app.use(express.json());
app.use(cors());

connection();
createApolloServer();
