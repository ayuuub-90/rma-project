import { asset } from "../assets/asset";
import { Link, useLocation } from "react-router-dom";
import { CgArrowRightO } from "react-icons/cg";

const Cover = () => {
  const location = useLocation();
  const url = location.pathname.substring(1).split("/")
  
  return (
    <div className="relative select-none">
      <img
        src={asset.banner_img}
        alt="banner"
        className="h-[100px] max-lg:h-[50px] w-full object-cover object-right-top"
      />
      <div className="absolute top-10 left-24 max-lg:left-2 max-lg:top-[15px] max-md:text-sm text-white tracking-wide font-mono flex items-center gap-2">
        <Link to={"/"}>Acceuill</Link> <CgArrowRightO className="text-lg" />{" "}
        <Link to={location.pathname} className="text-secondary-blue">{url[0]}</Link>
      </div>
    </div>
  );
};

export default Cover;
