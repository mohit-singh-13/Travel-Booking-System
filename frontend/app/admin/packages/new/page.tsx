import AddPackageForm from "@/components/AddPackageForm";

const Page = () => {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold py-10 px-4">Add New Package</h2>
      <div className="w-[80%] mx-auto">
        <AddPackageForm />
      </div>
    </div>
  );
};

export default Page;
