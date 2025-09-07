import express from "express";
import { connection } from "./config/database/mongo";

export const app = express();

app.use(express.json());

connection();
