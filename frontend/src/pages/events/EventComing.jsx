import { Link } from "react-router-dom";
import { asset } from "../../assets/asset";
import EventCard from "./EventCard";
import { useGetThreeEventsQuery } from "../../redux/api/eventApiSlice.js";

const EventComing = () => {
  const { data: events } = useGetThreeEventsQuery();

  return (
    <div className="px-24 max-md:px-2 my-12">
      <div className="w_full">
        <div className="flex justify-between relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 max-md:left-4 -left-10 top-0"
          />
          <span className="text-5xl font-bold max-md:text-xl">
            Événements en replay
          </span>
          <Link
            to={"/replays"}
            className="bg-gray-950 text-white center max-xl:text-center px-4 rounded-full cursor-pointer max-md:text-xs max-md:px-2"
          >
            Voir tous les évènements en replay
          </Link>
        </div>
        <div className="center">
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 py-8">
            {events?.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComing;
