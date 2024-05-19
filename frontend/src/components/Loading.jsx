import { tailspin } from "ldrs";

tailspin.register();

const Loading = () => {
  return (
    <div className="center h-[70vh] ">
      <l-tailspin size="40" stroke="5" speed="0.9" color="gray"></l-tailspin>
    </div>
  );
};

export default Loading;
