import Spinner from "~/components/Spinner";

const LoadingPage = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-[600px]">
      <Spinner />
    </div>
  );
};

export default LoadingPage;
