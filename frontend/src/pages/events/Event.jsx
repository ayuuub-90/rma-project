import { Link, useParams } from "react-router-dom";
import Cover from "../../components/Cover";
import Partners from "../../components/Partners.jsx";
import { useGetEventByIdQuery } from "../../redux/api/eventApiSlice.js";

const Event = () => {
  const params = useParams();
  const { data: event } = useGetEventByIdQuery(params.id);

  const date_begin = new Date(event?.startDate);
  const date_end = new Date(event?.stopDate);

  return (
    <>
      <Cover />
      <div className="p-14 max-xl:px-2 center flex-col">
        <div className="bg-primary-gray w-[90rem] max-2xl:w-full flex justify-between items-center p-4 rounded max-lg:flex-col">
          <div className="flex flex-col items-start max-lg:w-full">
            <p className="font-mono text-gray-500 text-lg max-md:text-sm">
              <strong className="text-primary-color">
                {date_begin.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </strong>{" "}
              {date_begin.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              {" à "}
              {date_end.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="font-bold text-[22px]  max-md:text-md">
              {event?.title}
            </p>
          </div>
          <Link
            to={`/event/${event?.id}`}
            className="button-hover button-hover bg-primary-color text-white font-bold text-lg rounded-full max-lg:rounded-md px-6 py-2 max-sm:text-sm max-lg:mt-4 max-lg:w-full max-lg:text-center max-md:text-sm"
          >
            Voir le programme
          </Link>
        </div>

        <div className="w-full h-[810px] max-xl:h-[600px] max-lg:h-[400px] max-md:h-[400px] max-sm:h-[300px] my-4 max-xl:my-3 ">
          <iframe
            className="w-full h-full"
            title="vimeo-player"
            src={event?.url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Partners />
    </>
  );
};

export default Event;
