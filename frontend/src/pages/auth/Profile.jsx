import { useEffect, useState } from "react";
import Cover from "../../components/Cover";
import { useGetUserByIdQuery } from "../../redux/api/userApiSLice";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../../redux/api/userApiSLice";
import { useDispatch } from "react-redux";
import { setCredintials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const { data: userInfo, isLoading } = useGetUserByIdQuery();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isLoading) {
      setInterval(() => setLoading(false), 1000);
    }
  }, [isLoading]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [titre, setTitre] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [profession, setProfession] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [mode_exercice, setMode_exercice] = useState("");
  const [num_RPPS, setNum_RPPS] = useState("");
  const [etablissement_exercice, setEtablissement_exercice] = useState("");
  const [pays_exercice, setPays_exercice] = useState("");
  const [connu_ou, setConnu_ou] = useState("");

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setTitre(userInfo.titre);
      setNom(userInfo.nom);
      setPrenom(userInfo.prenom);
      setProfession(userInfo.profession);
      setSpecialite(userInfo.specialite);
      setMode_exercice(userInfo.mode_exercice);
      setNum_RPPS(userInfo.num_RPPS);
      setEtablissement_exercice(userInfo.etablissement_exercice);
      setPays_exercice(userInfo.pays_exercice);
      setConnu_ou(userInfo.connu_ou);
    }
  }, [userInfo]);

  const dispatch = useDispatch();
  const [updateUser] = useUpdateUserMutation();
  const handleUpdate = async () => {
    try {
      const res = await updateUser({
        email: email,
        titre,
        nom,
        prenom,
        profession,
        specialite,
        mode_exercice,
        num_RPPS,
        etablissement_exercice,
        pays_exercice,
        connu_ou,
        password,
        confirmPassword,
      }).unwrap();
      dispatch(
        setCredintials({
          _id: res._id,
          nom: res.nom,
          prenom: res.prenom,
          email: res.email,
          titre: res.titre,
          profession: res.profession,
          specialite: res.specialite,
          num_RPPS: res.num_RPPS,
          pays_exercice: res.pays_exercice,
          etablissement_exercice: res.etablissement_exercice,
          admin: res.admin,
          pois: res.pois,
          image: res.image,
        })
      );
      return toast.success("user updated successfully");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  if (loading) {
    return (
      <>
        <Cover /> <Loading />
      </>
    );
  }

  return (
    <>
      <Cover />
      <div className="center w-full ">
        <div className="w-1/2 py-4 form max-lg:w-full max-lg:px-4">
          <div className="border-b border-primary-orange border-dashed pb-4 mb-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Informations email
            </h1>
          </div>

          <div className="flex flex-col mb-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="cursor-not-allowed"
            />
          </div>

          <div className="border-b border-primary-orange border-dashed py-4 my-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Changement de mot de passe
            </h1>
          </div>

          <div className="flex w-full mb-2 max-lg:flex-col">
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Votre mot de passe *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Confirmez votre mot de passe *</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="border-b border-primary-orange border-dashed py-4 my-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Autre informations
            </h1>
          </div>

          <div className="flex w-full mb-2 max-lg:flex-col">
            <div className="flex flex-col w-1/5 max-lg:w-full">
              <label>Titre *</label>
              <select value={titre} onChange={(e) => setTitre(e.target.value)}>
                <option value="DR">DR</option>
                <option value="Pr">Pr</option>
                <option value="Mme">Mme</option>
                <option value="Mr">Mr</option>
              </select>
            </div>
            <div className="flex flex-col w-2/5 max-lg:w-full">
              <label>Nom *</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-2/5 max-lg:w-full">
              <label>Prenom *</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full mb-2 max-lg:flex-col">
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Profession *</label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option value="Cherurguin">Cherurguin</option>
                <option value="Cherurguin">Cherurguin</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Specialite *</label>
              <select
                value={specialite}
                onChange={(e) => setSpecialite(e.target.value)}
              >
                <option value="Addidctologie">Addidctologie</option>
                <option value="Addidctologie">Addidctologie</option>
              </select>
            </div>
          </div>

          <div className="flex w-full mb-2 max-lg:flex-col">
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Mode exercice *</label>
              <select
                value={mode_exercice}
                onChange={(e) => setMode_exercice(e.target.value)}
              >
                <option value="Exercice liberal">Exercice liberal</option>
                <option value="Exercice liberal">Exercice liberal</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2 max-lg:w-full">
              <label>Numéro RPPS *</label>
              <input
                type="text"
                value={num_RPPS}
                onChange={(e) => setNum_RPPS(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full mb-2 max-lg:flex-col">
            <div className="flex flex-col w-2/3 max-lg:w-full">
              <label>Établissement d exercice *</label>
              <input
                type="text"
                value={etablissement_exercice}
                onChange={(e) => setEtablissement_exercice(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/3 max-lg:w-full">
              <label>Pays d exercice *</label>
              <select
                value={pays_exercice}
                onChange={(e) => setPays_exercice(e.target.value)}
              >
                <option value="maroc">Maroc</option>
                <option value="france">France</option>
              </select>
            </div>
          </div>

          <div className="flex w-full mb-4">
            <div className="flex flex-col w-full">
              <label>
                Comment avez-vous connu Rothschild Medical Academy ?
              </label>
              <select
                value={connu_ou}
                onChange={(e) => setConnu_ou(e.target.value)}
              >
                <option value="internet">Internet</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="mb-2">
            <input id="communications" type="checkbox" />
            <label htmlFor="communications">
              J’accepte de recevoir les communications de l’Hôpital Fondation
              Adolphe de Rothschild
            </label>
          </div>

          <div className="border-b border-primary-orange border-dashed py-4 my-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Préférences Cookies
            </h1>
          </div>

          <p className="text-gray-500 py-3 text-lg">
            Lorsque vous naviguez sur notre site internet, des informations sont
            susceptibles d’être enregistrées, ou lues, dans votre terminal, sous
            réserve de vos choix.
          </p>

          <p className="text-gray-500 py-3 text-lg">
            Le dépôt et la lecture de cookies afin d’analyser votre navigation
            et nous permettre de mesurer l’audience de notre site internet:
          </p>

          <div className="my-4 flex max-md:flex-col w-full gap-2">
            <div
              onClick={handleUpdate}
              className="button-hover bg-primary-color text-white font-medium text-lg rounded-full px-4 py-2 w-1/4 max-lg:w-full center max-xl:text-sm"
            >
              Editer mon profile
            </div>
            <Link
              to={"/integrate"}
              className="bg-white font-bold text-lg rounded-full px-4 py-2 text-primary-color border-[2px] border-primary-color secondary-button-hover w-3/4 max-lg:w-full center max-xl:text-sm"
            >
              Ajouter votre propre events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
