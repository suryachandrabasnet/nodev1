import express from "express";
import bodyParser from "body-parser";
import connection from "./database/sequelizeConnection.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());

app.listen({ port: 3000 }, async (req, res) => {
  console.log("Server up on http://localhost:3000");
});

//Database connection test
connection();
