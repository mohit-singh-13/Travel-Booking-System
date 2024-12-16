import express from "express";
import { getAllPackages } from "../controllers/userController";
import { addPackage, deletePackage, getAllBookings, updatePackage } from "../controllers/adminController";
export const adminRouter = express.Router();

adminRouter.get("/", getAllPackages);
adminRouter.get("/bookings", getAllBookings)
adminRouter.post("/packages/add", addPackage);
adminRouter.put("/packages/update/:id", updatePackage);
adminRouter.delete("/packages/delete/:id", deletePackage);
