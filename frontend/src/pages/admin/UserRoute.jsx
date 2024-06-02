import { useEffect } from "react";
import { useDeleteUserMutation, useGetAllUsersQuery } from "../../redux/api/userApiSLice";
import { toast } from "react-toastify";

const UserRoute = () => {
  const { data, refetch } = useGetAllUsersQuery();
  const users = data?.users;

  useEffect(() => {
    refetch();
  }, [refetch]);

  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = async (userID) => {
    try {
      const res = await deleteUser({ userID }).unwrap();
      refetch();
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <h2 className="text-2xl p-4 font-medium">Liste des utilisateurs </h2>
      <div className="h-[630px] overflow-auto ">
        {users?.length > 0 ? (
          <table className="w-full text-sm">
            <thead className="text-gray-700 my-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  utilisateur n°
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  nom et prénom
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  téléphone
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  email
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  pays
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  adresse
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  profession
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  specialite
                </td>
                <td className="font-semibold text-gray-600 px-4 py-2 text-left">
                  options
                </td>
              </tr>
            </thead>

            <tbody>
              {users?.map((user) => (
                <tr
                  key={user._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800"
                >
                  <td
                    className="font-semibold px-4 py-2 text-left text-gray-500"
                    title={user._id}
                  >
                    #{user._id.slice(0, 10)}...
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.titre} {user.nom} {user.prenom}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.num_RPPS}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.email}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.pays_exercice}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.etablissement_exercice}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.profession}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left">
                    {user.specialite}
                  </td>
                  <td className="font-semibold px-4 py-2 text-left ">
                    <p
                      onClick={() => handleDelete(user._id)}
                      className="hover:underline hover:text-red-800 cursor-pointer "
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
            <hr className="mb-2" />n{"'"}a pas aucun utilisateurs pour le moment
          </div>
        )}
      </div>
    </>
  );
};

export default UserRoute;
