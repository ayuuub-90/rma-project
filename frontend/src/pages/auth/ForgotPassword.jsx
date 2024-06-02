import { Link } from "react-router-dom";
import Cover from "../../components/Cover";
import { asset } from "../../assets/asset";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRegisterEmailResetPasswordMutation } from "../../redux/api/userApiSLice.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const isValidEmail = emailRegex.test(email);

  const [registerEmail] = useRegisterEmailResetPasswordMutation();

  const handleSendEmail = async () => {
    if (email) {
      if (isValidEmail) {
        try {
          // send email notification
          const res = await registerEmail({ email: email }).unwrap();
          toast.success(res.message);
        } catch (error) {
          toast.error(error?.data?.message || error.message);
        }
      } else toast.error("Please enter a valid email address");
    } else toast.error("Please fill in your email address");
  };
  return (
    <>
      <Cover />

      <div className="h-[590px] max-lg:h-[500px] w-full center relative">
        <img
          src={asset.ellipse}
          alt=""
          className="absolute -top-7 left-[300px] -z-10 max-lg:hidden"
        />
        <div className="h-full w-3/5 max-xl:w-4/5 max-md:w-full p-2">
          <h1 className="text-5xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-medium py-4">
            Mot de passe oublié
          </h1>

          <div className="w-full flex justify-center p-1 mt-12 max-lg:mt-0">
            <div className="flex flex-col gap-10 max-md:gap-4 w-3/5 max-lg:w-full">

              <div className="flex flex-col form max-md:text-sm">
                <label className=" max-md:text-sm">Votre Email *</label>
                <input
                  type="text"
                  placeholder="Écrivez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleSendEmail}
                  className="w-full button-hover bg-primary-color text-white font-medium text-lg rounded-full px-4 py-2 max-md:text-sm"
                >
                  Réinitialiser le mot de passe
                </button>
                <Link
                  to={"/"}
                  className="text-center underline font-bold max-md:text-sm"
                >
                  Revenir à la connexion
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
