import express from "express";
const app = express();
import { config } from "dotenv";

config();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server up and running");
});
