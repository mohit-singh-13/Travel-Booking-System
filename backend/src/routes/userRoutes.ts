import express from "express";
import {
  bookTour,
  getAllPackages,
  getPackage,
} from "../controllers/userController";
export const userRouter = express.Router();

userRouter.get("/packages", getAllPackages);
userRouter.get("/packages/:id", getPackage);
userRouter.post("/packages/createBooking", bookTour);
