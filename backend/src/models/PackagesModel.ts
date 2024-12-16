import mongoose, { Document, Schema } from "mongoose";

interface Packages extends Document {
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const packageSchema = new Schema<Packages>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  dates: [
    {
      type: Date,
      required: true,
    },
  ],
  image: String,
});

export default mongoose.model("Packages", packageSchema);