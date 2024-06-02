import { useState } from "react";
import Cover from "../../components/Cover";
import { useChangePasswordMutation } from "../../redux/api/userApiSLice.js";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleShowPassword = () => {
    let fields = document.querySelectorAll(".password");
    fields.forEach((field) => {
      if (field.type == "password") field.type = "text";
      else field.type = "password";
    });
  };

  const navigate = useNavigate();
  const params = useParams();
  const [ChangePassword] = useChangePasswordMutation();
  const handleChangePassword = async () => {
    if(password && confirmPassword) {
      if(password === confirmPassword){
        ""
      }else {
        return toast.error("Password are not match");
      }
    }else {
      return toast.error("fill the passwords field")
    }
    try {
      const res = await ChangePassword({
        data: {password: password},
        token: params.token,
      }).unwrap();
      if(res.error){
        return toast.error(res.error);
      }
      toast.success(res.message);
      navigate("/login");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <Cover />
      <div className="center w-full">
        <div className="w-1/2 py-4 form max-lg:w-full max-lg:px-4 h-[590px] ">
          <div className="border-b border-primary-orange border-dashed py-4 my-2 ">
            <h1 className="text-primary-orange text-xl font-medium tracking-wide">
              Changement de mot de passe
            </h1>
          </div>

          <div className="flex w-full mb-2 flex-col text-lg">
            <div className="flex flex-col max-lg:w-full max-md:text-sm">
              <label className="">Votre nouveau mot de passe *</label>
              <input
                placeholder="Votre nouveau mot de passe"
                className="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col max-lg:w-full max-md:text-sm">
              <label>Confirmez votre nouveau mot de passe *</label>
              <input
                placeholder="Confirmez votre nouveau mot de passe"
                className="password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="cursor-pointer size-4"
              id="voir mot de passe"
              onClick={handleShowPassword}
            />
            <label
              htmlFor="voir mot de passe"
              className="cursor-pointer text-lg max-md:text-sm"
            >
              Voir le mot de passe
            </label>
          </div>

          <div className="my-4 mt-10 ">
            <button
              onClick={handleChangePassword}
              className="w-full button-hover bg-primary-color text-white font-medium text-lg rounded-full px-4 py-2  max-md:text-sm"
            >
              Change mot de passe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
