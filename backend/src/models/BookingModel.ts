import mongoose, { Document, Schema } from "mongoose";

interface Bookings extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfTravelers: number;
  dateOfBooking: Date;
}

const bookingSchema = new Schema<Bookings>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  numberOfTravelers: {
    type: Number,
    required: true,
  },
  dateOfBooking: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Bookings", bookingSchema);
