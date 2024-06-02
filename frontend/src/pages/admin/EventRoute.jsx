import { useEffect } from "react";
import { useDeleteEventMutation, useGetAllEventsQuery } from "../../redux/api/eventApiSlice.js";
import moment from "moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const EventRoute = () => {
  const { data: events, refetch } = useGetAllEventsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);

  const [deleteEvent] = useDeleteEventMutation();
  const handleDelete = async (eventID) => {
    try {
      const res = await deleteEvent({ eventID }).unwrap();
      refetch();
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl p-4 font-medium">list des evenements </h2>
      <div className="h-[630px] overflow-auto ">
        {events?.length > 0 ? (
          <table className="w-full text-sm">
            <thead className="text-gray-700 my-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  event n°
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  titre
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  description
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  categorie
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  date début
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  date fin
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  ajouté depuis
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  options
                </td>
              </tr>
            </thead>

            <tbody>
              {events?.map((event) => (
                <tr
                  key={event._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800"
                >
                  <td
                    className="font-semibold px-4 py-2 text-left text-gray-500"
                    title={event._id}
                  >
                    #{event.id}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left ">
                    <Link to={`/event/${event.id}`} className="hover:underline">
                    {event.title}
                    </Link>
                  </td>
                  <td
                    title={event.description}
                    className="font-semibold px-4 py-2 text-left"
                  >
                    {event.description.slice(0, 40)}...
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {event.tag.title}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {moment(event.startDate).format("DD-MMM-yyyy hh:mm")}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {moment(event.stopDate).format("DD-MMM hh:mm")}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {moment(event.createdAt).fromNow()}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    <p
                      onClick={() => handleDelete(event._id)}
                      className="hover:underline hover:text-red-800 cursor-pointer"
                    >
                      supprimer
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="px-6 text-gray-600">
            <hr className="mb-2" />n{"'"}a pas des evenements pour le moment
          </div>
        )}
      </div>
    </div>
  );
};

export default EventRoute;
