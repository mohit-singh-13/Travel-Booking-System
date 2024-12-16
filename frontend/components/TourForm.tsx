import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface BookingDataProps {
  name: string;
  email: string;
  phoneNumber: string;
  numberOfTravelers: number | string;
  dateOfBooking: string;
}

const TourForm = ({
  setBookForm,
}: {
  setBookForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const [bookingData, setBookingData] = useState<BookingDataProps>({
    name: "",
    email: "",
    phoneNumber: "",
    numberOfTravelers: "",
    dateOfBooking: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const [confirmation, setConfirmation] = useState<string>("");

  const handlerClick = async () => {
    const URL = process.env.NEXT_PUBLIC_BE_URL;
    try {
      const response: { data: { success: boolean; message: string } } =
        await axios.post(`${URL}/api/v1/packages/createBooking`, bookingData);

      toast.success(response.data.message);
      setBookingData({
        name: "",
        email: "",
        phoneNumber: "",
        numberOfTravelers: "",
        dateOfBooking: "",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="lg:w-[35%] md:w-[45%] sm:w-[55%] w-[70%] border bg-white px-4 py-8 rounded-2xl relative">
        <div
          className="absolute right-0 mr-6 cursor-pointer"
          onClick={() => setBookForm(false)}
        >
          <IoClose size={28} />
        </div>

        <h3 className="font-bold text-3xl pb-8 text-center">
          Book your <br /> tour NOW!
        </h3>

        <div className="w-[90%] mx-auto space-y-2">
          <LabelledInput
            type="text"
            id="name"
            name="name"
            label="Name"
            value={bookingData.name}
            onChange={(e) => changeHandler(e)}
          />
          <LabelledInput
            type="email"
            id="email"
            name="email"
            label="Email"
            value={bookingData.email}
            onChange={(e) => changeHandler(e)}
          />
          <LabelledInput
            type="text"
            id="phone"
            name="phoneNumber"
            label="Phone"
            value={bookingData.phoneNumber}
            onChange={(e) => changeHandler(e)}
          />
          <LabelledInput
            type="number"
            id="number"
            name="numberOfTravelers"
            label="No. of Travelers"
            value={bookingData.numberOfTravelers}
            onChange={(e) => changeHandler(e)}
          />
          <LabelledInput
            type="date"
            id="date"
            name="dateOfBooking"
            label="Date"
            value={bookingData.dateOfBooking}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <Button
          className="bg-black text-white px-4 py-4 rounded-lg float-end mt-4 -translate-x-5"
          onClick={() => handlerClick()}
        >
          Submit Booking
        </Button>
      </div>
    </div>
  );
};

interface LabelledInputProps {
  type: string;
  id: string;
  label: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const LabelledInput = ({
  type,
  id,
  label,
  value,
  onChange,
  name,
}: LabelledInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="rounded-lg py-3 px-2 border-gray-300 border-2 focus:border-blue-600 outline-none"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default TourForm;
