import { LiaRupeeSignSolid } from "react-icons/lia";
import Button from "./Button";
import axios from "axios";
import { useEffect, useState } from "react";

export interface PackageProps {
  _id: string;
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const ListPackages = ({ packages }: { packages: PackageProps[] }) => {
  const [myPkg, setMyPkg] = useState<PackageProps[]>([]);

  useEffect(() => {
    setMyPkg(packages);
  }, [packages]);

  const deleteHandler = async (id: string) => {
    const URL = process.env.NEXT_PUBLIC_BE_URL;
    setMyPkg(myPkg.filter((element) => element._id !== id));
    await axios.delete(`${URL}/api/v1/admin/packages/delete/${id}`);
  };

  return (
    <div>
      {myPkg.length > 0 ? (
        <div>
          <div className="grid grid-cols-3 font-bold text-gray-700">
            <p>Title</p>
            <p>Price</p>
            <p>Actions</p>
          </div>
          <div className="flex flex-col gap-4">
            {myPkg.map((element, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-t-2 pt-2 mt-2"
              >
                <p>{element.title}</p>
                <p className="flex items-center gap-1">
                  <LiaRupeeSignSolid /> {element.price}
                </p>
                <Button
                  className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold w-20"
                  onClick={() => deleteHandler(element._id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center pt-24 font-bold text-xl">
          No Packages Yet
        </div>
      )}
    </div>
  );
};

export default ListPackages;
