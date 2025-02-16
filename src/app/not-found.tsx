import { ShipWheel } from "lucide-react";

const NotFound = () => {
  return (
    <main className=" flex py-10 justify-center items-center">
      <div className="relative ">
        <ShipWheel className="w-7xl h-72 animate-spin opacity-5 duration-[10s]" />
        <h1 className="absolute top-[50%] left-[50%] -translate-1/2 text-7xl font-bold">
          404
        </h1>
      </div>
    </main>
  );
};
export default NotFound;
