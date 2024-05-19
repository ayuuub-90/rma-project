const HeroVideo = () => {
  return (
    <>
      <div className="mt-12 bg-secondary-blue flex max-xl:flex-col justify-around relative py-10">
        {/* <div className="absolute bg-white/60 size-60 rounded-full left-[560px] top-10 "></div> */}

        <div className="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7Qrh7dbyMHo?si=J5fdoWyIp8TrbmhL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </div>
        <div className="w-[40%] max-xl:w-full max-xl:p-6 py-6 center ">
          <div className="flex  flex-col gap-7">
            <p className="text-primary-color text-3xl font-light tracking-wider max-xl:text-xl">
              Les rendez-vous de Rothschild Medical Academy
            </p>
            <div className="flex flex-col gap-2 text-gray-500 text-[17px] max-xl:text-[13px] ">
              <p>
                L’Hôpital Fondation Adolphe de Rothschild vous propose sur cette
                plateforme d’assister à ses évènements de formation à distance
                organisés sous l’égide de Rothschild Medical Academy.
              </p>
              <p>
                Nos médecins et chirurgiens se mobilisent pour partager leur
                expérience sur des sujets complexes sous forme de débats entre
                pairs, discussions de cas cliniques ou commentaires de
                chirurgies.
              </p>
              <p>
                Nous demeurons, en proposant ces rendez-vous, fidèle à notre
                philosophie «Transmettre, Innover, S’engager! »
              </p>
            </div>
            <a
              href="https://preprod.elearning.fmcproduction.com/file/New_Plaquette_RMA_2022v2.pdf"
              target="blank"
              className="bg-white w-[200px] rounded-full py-2 px-3 center text-primary-color font-bold secondary-button-hover border select-none"
            >
              Telecharger la palette
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;
