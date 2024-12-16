import express from "express";
const app = express();
import { config } from "dotenv";
import { adminRouter } from "./routes/adminRoutes";
import { userRouter } from "./routes/userRoutes";
import { dbConnect } from "./config/database";
import cors from "cors";

config();
app.use(cors());
app.use(express.json());

const PORT = Number(process.env.PORT);
dbConnect();

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log("Server up and running");
});
