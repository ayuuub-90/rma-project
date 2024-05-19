import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import ConditionGenerales from "../pages/policy/ConditionGenerales";
import MentionLegals from "../pages/policy/MentionLegals";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="bg-primary-color ">
      <div className="text-white font-bold text-[17px] flex justify-around items-center max-lg:flex-col max-lg:gap-10 max-lg:text-[12px] py-4">
        <div className="cursor-pointer">Hospital Logo</div>
        <div className="flex gap-16 max-lg:gap-2 center max-lg:flex-col">
          <Link to={"/contact"} className="cursor-pointer">
            Contact
          </Link>
          <div className="cursor-pointer" onClick={() => setVisible(true)}>
            Mentions légales
          </div>
          <div
            className="cursor-pointer w-[200px] max-lg:w-full"
            onClick={() => setVisible2(true)}
          >
            Conditions générales d’utilisation
          </div>
        </div>
        <div className="flex gap-2">
          <div className="cursor-pointer">Suivez-nous !</div>
          <a
            target="blank"
            href="https://www.facebook.com/Hopital.FondationAdeRothschild"
          >
            <FaFacebook className="size-7" />
          </a>
          <a target="blank" href="https://twitter.com/FondARothschild">
            <FaXTwitter className="size-7" />
          </a>
          <a
            target="blank"
            href="https://fr.linkedin.com/company/hopital-fondation-a-de-rothschild"
          >
            <FaLinkedin className="size-7" />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/hopital_fond_a_rothschild"
          >
            <FaInstagram className="size-7" />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCE4zT5aROYNUfgcJIDwh7AA"
          >
            <FaYoutube className="size-7" />
          </a>
        </div>
      </div>
      <MentionLegals visible={visible} setVisible={setVisible} />
      <ConditionGenerales visible2={visible2} setVisible2={setVisible2} />
    </div>
  );
};

export default Footer;
