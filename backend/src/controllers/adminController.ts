import { Request, Response } from "express";
import Packages from "../models/PackagesModel";
import Bookings from "../models/BookingModel";

interface PackageProps {
  title: string;
  description: string;
  price: string;
  dates: string;
  image: string;
}

export const addPackage = async (req: Request, res: Response) => {
  try {
    const { title, description, price, dates, image }: PackageProps = req.body;

    if (!title || !description || !price || !dates || !image) {
      res.status(422).json({ success: false, message: "Invalid inputs" });
      return;
    }

    await Packages.create({
      title,
      description,
      price,
      dates: dates.split(","),
      image,
    });

    res
      .status(200)
      .json({ success: true, message: "Package added successfully" });
    return;
  } catch (err) {
    res.status(422).json({ success: false, message: "Invalid inputs" });
    return;
  }
};

export const updatePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };

    const { title, description, price, dates, image }: Partial<PackageProps> =
      req.body;

    const result = await Packages.findByIdAndUpdate(
      id,
      { title, description, price, dates, image },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Package has been updated successfully",
      data: result,
    });
    return;
  } catch (err) {
    res.status(404).json({ success: false, message: "Package not found" });
    return;
  }
};

export const deletePackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };

    await Packages.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Package has been deleted successfully",
    });
    return;
  } catch (err) {
    res.status(404).json({ success: false, message: "Package not found" });
    return;
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const result = await Bookings.find({});

    res.status(200).json({ success: true, result });
    return;
  } catch (err) {
    res.status(404).json({ success: false, message: "Package not found" });
    return;
  }
};
