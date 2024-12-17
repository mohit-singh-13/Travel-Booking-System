import { Request, Response } from "express";
import Packages from "../models/PackagesModel";
import Bookings from "../models/BookingModel";

export const getAllPackages = async (req: Request, res: Response) => {
  try {
    const result = await Packages.find({});

    res.status(200).json({ success: true, packages: result });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
    return;
  }
};

export const getPackage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };

    const result = await Packages.findById(id);

    if (!result) {
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        title: result.title,
        description: result.description,
        price: result.price,
        dates: result.dates,
        image: result.image,
      },
    });
    return;
  } catch (err) {
    res.status(404).json({ success: false, message: "Package not found" });
    return;
  }
};

interface BookTourProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfTravelers: number;
  dateOfBooking: Date;
}

export const bookTour = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      numberOfTravelers,
      dateOfBooking,
    }: BookTourProps = req.body;

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !numberOfTravelers ||
      !dateOfBooking
    ) {
      res.status(422).json({ success: false, message: "Invalid inputs" });
      return;
    }

    await Bookings.create({
      name,
      email,
      phoneNumber,
      numberOfTravelers,
      dateOfBooking,
    });

    res
      .status(200)
      .json({ success: true, message: "Tour has been booked successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
    return;
  }
};
