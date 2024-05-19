import { asset } from "../assets/asset";

const Hero = () => {
  return (
    <div className="relative ">
      <img src={asset.banner_img} alt="banner" className="w-full" />
      <div className="center flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
        <span className="text-center text-wrap text-[3em] max-2xl:text-[2em] max-xl:text-[1.6em] max-lg:text-[1.3em] max-md:text-[.9em] max-md:text-left max-md:text-nowrap max-sm:text-[.6em] ">
          Développer vos compétences aujourd’hui pour construire celles de
          demain.
        </span>
      </div>
    </div>
  );
};

export default Hero;
