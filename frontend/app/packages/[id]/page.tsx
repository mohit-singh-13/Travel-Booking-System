"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Loading from "../loading";

interface PackageProps {
  title: string;
  description: string;
  price: string;
  dates: Date[];
  image: string;
}

const TourPage = () => {
  const { id } = useParams();

  const [pkg, setPkg] = useState<PackageProps>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPackage = useCallback(async () => {
    setLoading(true);
    const URL = process.env.NEXT_PUBLIC_BE_URL + `/api/v1/packages/${id}` || "";
    const {
      data,
    }: {
      data: {
        success: boolean;
        data: PackageProps;
      };
    } = await axios.get(URL);

    setPkg(data.data);
    // console.log(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchPackage();
  }, [fetchPackage]);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>{pkg?.title}</h2>
    </div>
  );
};

export default TourPage;
