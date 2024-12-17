"use client";

import { ChangeEvent, useState } from "react";
import Button from "./Button";
import axios from "axios";
import toast from "react-hot-toast";

interface AddPackageProps {
  title: string;
  description: string;
  price: string;
  dates: string;
  image: string;
}

const AddPackageForm = () => {
  const [addPackageForm, setAddPackageForm] = useState<AddPackageProps>({
    title: "",
    description: "",
    price: "",
    dates: "",
    image: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddPackageForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clickHandler = async () => {
    const URL = process.env.NEXT_PUBLIC_BE_URL;
    try {
      const response: { data: { success: boolean; message: string } } =
        await axios.post(`${URL}/api/v1/admin/packages/add`, addPackageForm);

      toast.success(response.data.message);
      setAddPackageForm({
        title: "",
        description: "",
        price: "",
        dates: "",
        image: "",
      });
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <LabelledInput
        id="title"
        label="Title"
        type="text"
        name="title"
        value={addPackageForm.title}
        onChange={changeHandler}
      />
      <LabelledInput
        id="description"
        label="Description"
        type="text"
        name="description"
        value={addPackageForm.description}
        onChange={changeHandler}
      />
      <LabelledInput
        id="price"
        label="Price in Rs."
        type="text"
        name="price"
        value={addPackageForm.price}
        onChange={changeHandler}
      />
      <LabelledInput
        id="dates"
        label="Dates (enter comma separated dates in YYYY/MM/DD format)"
        type="text"
        name="dates"
        value={addPackageForm.dates}
        onChange={changeHandler}
      />
      <LabelledInput
        id="image"
        label="Paste image URL"
        type="text"
        name="image"
        value={addPackageForm.image}
        onChange={changeHandler}
      />
      <Button
        className="text-white bg-black px-4 py-3 self-start rounded-lg"
        onClick={() => clickHandler()}
      >
        Add Package
      </Button>
    </div>
  );
};

interface LabelledInputProps {
  type: string;
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const LabelledInput = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
}: LabelledInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-lg py-3 px-2 border-gray-300 border-2 focus:border-blue-600 outline-none"
      />
    </div>
  );
};

export default AddPackageForm;
