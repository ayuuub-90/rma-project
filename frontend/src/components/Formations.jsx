import { asset } from "../assets/asset.js";

const Formations = () => {
  return (
    <div className="center flex-col my-10">
      <span className="text-4xl font-bold mb-10 max-md:text-xl">
        Thématiques de nos formations
      </span>
      <div className="flex gap-10 max-md:flex-col max-md:gap-2">
        <div className="center flex-col gap-4 border border-primary-color py-4 px-10 ">
          <img src={asset.icon_eye} alt="" className="size-40 max-md:size-10 max-lg:size-24" />
          <span className="text-2xl text-primary-color font-semibold  max-sm:text-sm max-md:text-lg max-lg:text-xl">
            Ophtalmologie
          </span>
        </div>
        <div className="center flex-col gap-4 border border-primary-color py-4 px-10 ">
          <img src={asset.icon_cerveau} alt="" className="size-40 max-md:size-10 max-lg:size-24" />
          <span className="text-2xl text-primary-color font-semibold  max-sm:text-sm max-md:text-lg max-lg:text-xl">
            Neurosciences
          </span>
        </div>
        <div className="center flex-col gap-4 border border-primary-color py-4 px-10 ">
          <img src={asset.icon_caduce} alt="" className="size-40 max-md:size-10 max-lg:size-24" />
          <span className="text-2xl text-primary-color font-semibold  max-sm:text-sm max-md:text-lg max-lg:text-xl">ORL</span>
        </div>
      </div>
    </div>
  );
};

export default Formations;
