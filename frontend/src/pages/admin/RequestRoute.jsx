import { useEffect } from "react";
import {
  useAcceptRequestMutation,
  useDeclineRequestMutation,
  useGetAllRequestsQuery,
} from "../../redux/api/userApiSLice.js";
import { toast } from "react-toastify";

const RequestRoute = () => {
  const { data, refetch } = useGetAllRequestsQuery();
  const requests = data?.requests;

  useEffect(() => {
    refetch();
  }, [refetch])

  const [acceptRequest] = useAcceptRequestMutation();
  const handleAccept = async (userID, requestID) => {
    try {
      const res = await acceptRequest({ userID, requestID });
      toast.success(res.message);
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const [declineRequest] = useDeclineRequestMutation();
  const handleDecline = async (requestID) => {
    try {
      const res = await declineRequest({ requestID });
      toast.success(res.message);
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <h2 className="text-2xl p-4 font-medium">Demandes des utilisateurs </h2>
      <div className="h-[630px] overflow-auto ">
        {requests?.length > 0 ? (
          <table className="w-full text-sm">
            <thead className="text-gray-700 my-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  demande n°
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  nom et prénom
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  téléphone
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  email
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  pays
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  adresse
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  profession
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  specialite
                </td>
                <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                  options
                </td>
              </tr>
            </thead>

            <tbody>
              {requests?.map((request) => (
                <tr
                  key={request._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800"
                >
                  <td
                    className="font-semibold px-4 py-2 text-left text-gray-500"
                    title={request._id}
                  >
                    #{request._id.slice(0, 10)}...
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.titre} {request.user.nom}{" "}
                    {request.user.prenom}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.num_RPPS}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.email}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.pays_exercice}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.etablissement_exercice}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.profession}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {request.user.specialite}
                  </td>
                  <td className="font-semibold w-full h-full px-4 py-2 text-left flex flex-col">
                    <p
                      onClick={() =>
                        handleAccept(request.user._id, request._id)
                      }
                      className="hover:underline hover:text-blue-800 cursor-pointer"
                    >
                      accepter
                    </p>
                    <p
                      onClick={() => handleDecline(request._id)}
                      className="hover:underline hover:text-red-800 cursor-pointer"
                    >
                      décliner
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="px-6 text-gray-600">
            <hr className="mb-2" />n{"'"}a pas des demandes pour le moment
          </div>
        )}
      </div>
    </>
  );
};

export default RequestRoute;
