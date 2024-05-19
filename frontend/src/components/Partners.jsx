import { asset } from "../assets/asset.js";

const Partners = () => {
  return (
    <div className="py-2 overflow-hidden">
      <div className="px-24 max-xl:pl-8 relative">
        <img
          src={asset.ellipseTwo}
          alt=""
          className="absolute size-20 -z-10 left-14 max-md:size-14 max-md:left-4 top-0"
        />
        <h1 className="text-5xl max-md:text-2xl font-bold">Nos partenaires</h1>
      </div>
      <div className="center h-[300px]">
        <img
          src={asset.bayer_logo}
          alt="bayer_logo"
          className=""
          onClick={() => {window.scrollTo(0, 0)}}
        />
      </div>
    </div>
  );
};

export default Partners;
