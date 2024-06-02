import { useEffect, useState } from "react";
import Cover from "../../components/Cover";
import ConditionGenerales from "../policy/ConditionGenerales";
import { useNavigate, useParams } from "react-router";
import {
  useRegisterUserMutation,
  useVerifyEmailQuery,
} from "../../redux/api/userApiSLice";
import { useGetAllCountriesQuery } from "../../redux/api/countryApiSlice";
import { toast } from "react-toastify";

const Authenticate = () => {
  const [visible2, setVisible2] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const { data } = useVerifyEmailQuery(params.token);
  
  useEffect(() => {
    if(data?.error){
      toast.error(data.error);
      navigate("/login")
    }
  }, [data, navigate])
  
  useEffect(() => {
    if (data) {
      // toast.success(data.message);
      setEmail(data.email);
    }
  }, [data])
  
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

  const [registerUser] = useRegisterUserMutation();
  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      await registerUser({
        email,
        password,
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
        verifid: true
      }).unwrap();
      toast.success("Registred with success");
      navigate("/login");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const { data: countries } = useGetAllCountriesQuery();

  return (
    <>
      <Cover />
      <div className="center w-full">
        <div className="w-1/2 py-4 form">
          <h1 className="text-3xl text-primary-color">
            Finalisez votre inscription
          </h1>
          <div className="border-b border-primary-orange border-dashed py-4 my-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Informations
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

          <div className="flex w-full mb-2">
            <div className="flex flex-col w-1/2">
              <label>Votre mot de passe *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
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
              Informations
            </h1>
          </div>

          <div className="flex w-full mb-2">
            <div className="flex flex-col w-1/5">
              <label>Titre *</label>
              <select value={titre} onChange={(e) => setTitre(e.target.value)}>
                <option value="DR">DR</option>
                <option value="Pr">Pr</option>
                <option value="Mme">Mme</option>
                <option value="Mr">Mr</option>
              </select>
            </div>
            <div className="flex flex-col w-2/5">
              <label>Nom *</label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-2/5">
              <label>Prenom *</label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full mb-2">
            <div className="flex flex-col w-1/2">
              <label>Profession *</label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              >
                <option value="Cherurguin">Cherurguin</option>
                <option value="Cherurguin">Cherurguin</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2">
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

          <div className="flex w-full mb-2">
            <div className="flex flex-col w-1/2">
              <label>Mode exercice *</label>
              <select
                value={mode_exercice}
                onChange={(e) => setMode_exercice(e.target.value)}
              >
                <option value="Exercice liberal">Exercice liberal</option>
                <option value="Exercice liberal">Exercice liberal</option>
              </select>
            </div>
            <div className="flex flex-col w-1/2">
              <label>Numéro RPPS *</label>
              <input
                type="text"
                value={num_RPPS}
                onChange={(e) => setNum_RPPS(e.target.value)}
              />
            </div>
          </div>

          <div className="flex w-full mb-2">
            <div className="flex flex-col w-2/3">
              <label>Établissement d exercice *</label>
              <input
                type="text"
                value={etablissement_exercice}
                onChange={(e) => setEtablissement_exercice(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/3">
              <label>Pays d exercice *</label>
              <select
                value={pays_exercice}
                onChange={(e) => setPays_exercice(e.target.value)}
              >
                {countries?.map((country) => (
                  <option key={country._id} value={country.name}>
                    {country.name}
                  </option>
                ))}
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

          <div className="mb-2">
            <input id="conditions" type="checkbox" />
            <label htmlFor="conditions">
              J’accepte les conditions générales d’utilisation de la plateforme.
            </label>
          </div>

          <div>
            <span
              onClick={() => setVisible2(true)}
              className="text-primary-color underline mx-4 cursor-pointer"
            >
              Conditions générales d’utilisation
            </span>
            <ConditionGenerales visible2={visible2} setVisible2={setVisible2} />
          </div>

          <div className="my-4" onClick={handleRegister}>
            <button className="button-hover bg-primary-color text-white font-medium text-lg rounded-full px-4 py-2 ">
              Activer mon compte
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticate;
