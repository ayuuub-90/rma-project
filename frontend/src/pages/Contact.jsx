import { useState } from "react";
import { asset } from "../assets/asset";
import Cover from "../components/Cover";
import { useSendMessageMutation } from "../redux/api/contactApiSlice";
import { toast } from "react-toastify";

const Contact = () => {
  const [sendMessage] = useSendMessageMutation();

  const [nom, setNom] = useState();
  const [prenom, setPrenom] = useState();
  const [email, setEmail] = useState();
  const [object, setObject] = useState();
  const [message, setMessage] = useState();

  const handleSendMessage = async () => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const isValidEmail = emailRegex.test(email);

    if (email && !isValidEmail) return toast.error("Invalid email address");

    try {
      await sendMessage({
        prenom: prenom,
        nom: nom,
        message: message,
        object: object,
        email: email,
      }).unwrap();
      toast.success(
        "Nous avons bien recu votre message, et nous avons le traiter plus tot"
      );
      setNom("");
      setPrenom("");
      setEmail("");
      setObject("");
      setMessage("");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div>
      <Cover />
      <div className="flex justify-around my-10">
        <div className="w-[700px] flex flex-col gap-10 max-md:gap-3 max-md:px-2 relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 max-md:-left-4 -left-10"
          />
          <h1 className="text-5xl font-bold tracking-wide max-md:tracking-wider max-md:text-3xl">
            Contact
          </h1>
          <div className=" gap-4 flex flex-col">
            <span className="text-primary-color text-2xl tracking-wide max-md:text-lg ">
              Nous contacter
            </span>
            <div className="bg-secondary-blue h-[700px] max-sm:h-[600px] rounded-md flex flex-col justify-between gap-2 p-6 input max-sm:p-2">
              <div className="flex flex-col gap-1">
                <label>Prenom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <label>Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Object</label>
                <input
                  type="text"
                  value={object}
                  onChange={(e) => setObject(e.target.value)}
                />
                <label>Message</label>
                <textarea
                  className="rounded-xl resize-none outline-none p-2"
                  rows={6}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="bg-primary-color center font-medium text-lg text-white py-3 px-3 rounded-lg button-hover mt-10"
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
        <div className="center -z-10 max-lg:hidden">
          <div className="right-0 absolute w-[23rem] h-[40rem] bg-primary-color rounded-tl-full rounded-bl-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
