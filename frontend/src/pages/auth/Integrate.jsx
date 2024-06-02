import { useSelector } from "react-redux";
import Cover from "../../components/Cover";
import { asset } from "../../assets/asset";
import { useState } from "react";
import {
  useCreatePersonOfInterestMutation,
  useUploadImageUserMutation,
} from "../../redux/api/userApiSLice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Integrate = () => {
  const { user } = useSelector((state) => state.auth);
  const [imageUser, setImageUser] = useState(user.image || "");
  const navigate = useNavigate();

  const [uploadImageUser] = useUploadImageUserMutation();
  const handleUserImage = async (e) => {
    if(user.pois) return;
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadImageUser(formData).unwrap();
      setImageUser(res.file);
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const [createPersonOfInterest] = useCreatePersonOfInterestMutation();
  const handleSave = async () => {
    if(user.pois){
      return toast.error("Votre demande est deja accepter");
    }
    try {
      const res = await createPersonOfInterest({
        userID: user._id,
        image: imageUser,
      }).unwrap();
      toast.success(res.message);
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <Cover />
      <div className="min-h-[590px] w-full center relative">
        <img
          src={asset.ellipse}
          alt=""
          className="absolute -top-7 left-[300px] -z-10 max-lg:hidden"
        />
        <div className="h-full w-3/5 max-xl:w-4/5 max-md:w-full p-2">
          <h1 className="text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-medium py-4">
            Bonjour {user.titre} {user.nom} {user.prenom}
          </h1>

          <div className="w-full flex max-lg:flex-col gap-12 justify-center p-1 my-12 max-lg:mt-0">
            <div className="flex flex-col center gap-2 w-1/3 max-lg:w-full">
              <div className="flex flex-col mb-2 form"></div>

              <form className="w-full center flex-col gap-2">
                <img
                  src={!imageUser ? asset.unknown_user : imageUser}
                  alt=""
                  className="size-56 object-cover rounded-full"
                />
                <input
                  type={user.pois ? "text" : "file"}
                  name="image1"
                  accept="image/*"
                  id="input-file1"
                  onChange={handleUserImage}
                  hidden
                />

                <label
                  htmlFor="input-file1"
                  className={`${user.pois ? "cursor-default" : "cursor-pointer hover:bg-gray-200 bg-gray-100"}  text-primary-color w-[200px] rounded text-center`}
                >
                  {user.pois
                  ? "photo de profile"
                  : "Ajouter votre photo"}
                </label>
              </form>
            </div>

            <div className="flex flex-col gap-6 w-2/3 max-lg:w-full text-lg max-md:text-sm center justify-between">
              <div className="flex flex-col w-full text-gray-600">
                <label>
                  <strong>Email: </strong> {user.email}
                </label>
                <label>
                  <strong>Nom et Prénom: </strong> {user.titre} {user.nom}{" "}
                  {user.prenom}
                </label>
                <label>
                  <strong>Profession: </strong> {user.profession}
                </label>
                <label>
                  <strong>Specialité: </strong> {user.specialite}
                </label>
                <label>
                  <strong>Pays d{"'"}exercice: </strong> {user.pays_exercice}
                </label>
                <label>
                  <strong>Numéro de téléphone: </strong> {user.num_RPPS}
                </label>
                <label>
                  <strong>Etablissement d{"'"}exercice: </strong>{" "}
                  {user.etablissement_exercice}
                </label>
              </div>
              <div
                onClick={handleSave}
                className={`text-white font-medium text-lg rounded-full px-4 py-2 w-full center max-xl:text-sm ${user.pois ? "cursor-default bg-gray-400" : "button-hover bg-primary-color "}`}
              >
                {user.pois
                  ? "Votre demande a été accepté"
                  : "Envoyer demande à l'admin"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrate;
