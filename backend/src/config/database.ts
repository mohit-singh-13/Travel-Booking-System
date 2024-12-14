import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect("", {
      family: 4,
    })
    .then((res) => console.log("DB connected successfully"))
    .catch((err) => console.log("Error while connecting to DB"));
};
