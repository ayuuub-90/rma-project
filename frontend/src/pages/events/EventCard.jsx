/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { user } = useSelector((state) => state.auth);
  const date_begin = new Date(event.startDate);
  const date_end = new Date(event.stopDate);

  //! TODO ==> still no static image in this events data source

  return (
    <div className="bg-primary-gray m-2 max-w-[450px] rounded-md overflow-hidden flex flex-col justify-between">
      <img
        src={event.thumbnail}
        alt={event.thumbnail}
        className="w-full h-[220px] max-lg:h-auto object-cover "
      />
      <div className="p-4 pr-10">
        <p className="text-[25px] pb-2 font-semibold">{event.title}</p>
        <span className="text-primary-color text-xl font-mono">
          {/* <strong>110 avr. 2024</strong> 09:00 à 10:00 */}
          <strong>
            {date_begin.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </strong>
          {date_begin.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {" à "}
          {date_end.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        <p className="text-gray-500 text-lg py-2">
          {event.personOfInterests.map((pois) => (
            <span key={pois._id}>
              {pois.civility} {pois.firstname} {pois.lastname},{" "}
            </span>
          ))}
        </p>
        <div className="p-3 pr-6 flex items-center gap-3 text-primary-color font-bold ">
          <img src={event.tag.icon} alt="" className="size-10" />
          <p>{event.tag.title} </p>
        </div>
      </div>
      <div className="flex gap-3 p-4">
        {user ? (
          <Link
            to={`/event/${event.id}/replay`}
            className="button-hover bg-primary-color text-white font-bold text-lg rounded-full px-4 py-2 "
          >
            Voir le replay
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="button-hover bg-primary-color text-white font-bold text-lg rounded-full px-4 py-2 "
          >
            Se connecter
          </Link>
        )}

        <Link
          to={`/event/${event.id}`}
          className="bg-white font-bold text-lg rounded-full px-4 py-2 text-primary-color border secondary-button-hover"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
