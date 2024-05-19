import { useGetAllPoisQuery } from "../redux/api/personOfInterestApiSlice.js";

const Test = () => {
  const { data: persons } = useGetAllPoisQuery();

  return (
    <div className="flex gap-2 m-5 p-5 border-y border-primary-color">
      {persons?.map((person) => (
        <div key={person._id} className="">
          <img src={person.image} alt="" className="rounded-full" />
          <p className="text-primary-orange font-bold text-xl">
            {person.civility} {person.lastname}{" "}<br /> {person.firstname} 
          </p>
        </div>
      ))}
    </div>
  );
};

export default Test;
