import { useState } from "react";
import { toast } from "react-toastify";
import { useRegisterEmailMutation} from "../../redux/api/userApiSLice.js";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  const isValidEmail = emailRegex.test(email);

  const [registerEmail] = useRegisterEmailMutation();

  const handleCreate = async () => {
    if (email && confirmEmail) {
      if (isValidEmail) {
        if (email === confirmEmail) {
          try {
            // send email notification
            const res = await registerEmail({email: email}).unwrap();
            toast.success(res.message);
          } catch (error) {
            toast.error(error?.data?.message || error.message);
          }
        } else toast.error("Email don't match");
      } else toast.error("Please enter a valid email address");
    } else toast.error("Please fill in your email address");
  };

  return (
    <div className="w-[450px] max-sm:w-[100%] max-sm:px-4 bg-secondary-orange border-primary-orange border-2 rounded-lg h-[570px] flex flex-col gap-8 p-8 text-primary-color">
      <div className="">
        <p className="text-lg font-medium tracking-wider">
          Je n’ai pas de compte
        </p>
      </div>
      <div className="">
        <p className="text-2xl text-primary-orange font-bold tracking-wider">
          CRÉER UN COMPTE
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="font-bold">Entrez votre e-mail ici *</label>
        <input
          type="email"
          className="border p-2 rounded-lg text-black outline-none focus:scale-[0.98] "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold">Entrez à nouveau votre e-mail ici *</label>
        <input
          type="email"
          className="border p-2 rounded-lg text-black outline-none focus:scale-[0.98] "
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="size-4"
          name=""
          id="Je certifie être un professionnel de santé"
        />
        <label
          className="text-lg font-bold cursor-pointer"
          htmlFor="Je certifie être un professionnel de santé"
        >
          Je certifie être un professionnel de santé
        </label>
      </div>
      <button
        onClick={handleCreate}
        className="text-white button-hover bg-primary-color center focus:outline p-2 cursor-pointer rounded-full"
      >
        <span className="text-xl font-bold">
          Creer un compte
        </span>
      </button>
    </div>
  );
};

export default SignIn;
