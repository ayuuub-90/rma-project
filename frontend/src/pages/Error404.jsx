import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Error404 = () => {
  return (
    <>
    <hr />
      <div className="w-full h-[80vh] center flex-col gap-8">
      <p className="text-7xl font-light tracking-wide">
        Oups, Page not found 404 :{"("}{" "}
      </p>
      <Link to={"/"} className="bg-primary-color rounded-sm text-white py-2 px-4 flex items-center gap-2">
        <GoArrowLeft className="size-6" />
        <p>Go Back Home</p>
      </Link>
    </div>
    </>
  );
};

export default Error404;
