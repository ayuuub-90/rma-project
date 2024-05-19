import { useEffect, useState } from "react";
import { asset } from "../../assets/asset";
import Cover from "../../components/Cover";
import Partners from "../../components/Partners";
import EventCard from "./EventCard";
import { FaFilter } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Loading from "../../components/Loading";
import { useGetEventsFilteredQuery } from "../../redux/api/eventApiSlice.js";
import { useGetAllTagsQuery } from "../../redux/api/tagApiSlice.js";
import { useGetAllPoisQuery } from "../../redux/api/personOfInterestApiSlice.js";

const EventReplays = () => {
  const { data: tags } = useGetAllTagsQuery();
  const { data: personOfInterests } = useGetAllPoisQuery();

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isOrateurOpen, setIsOrateurOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  //* close the side bar filter when click outside of it
  function handleClose(e) {
    if (e.target.id === "sideBarFilter") {
      setIsFilterOpen(false);
    }
  }

  //* set the checked value id in checked tags (checkedTags) array to filter with
  const [checkedTags, setCheckedTags] = useState([]);
  const handleCheckTags = (value, id) => {
    const all = value
      ? [...checkedTags, id]
      : checkedTags.filter((c) => c !== id);

    setCheckedTags(all);
  };

  //* set the checked value id in checked person of interests (checkedPois) array to filter with
  const [checkedPois, setCheckedPois] = useState([]);
  const handleCheckPois = (value, id) => {
    const all = value
      ? [...checkedPois, id]
      : checkedPois.filter((c) => c !== id);

    setCheckedPois(all);
  };

  //* get the events data filtered by personOfInterest and tag
  const { data: events } = useGetEventsFilteredQuery({
    checkedTags,
    checkedPois,
  });

  //* loading spiner functionality
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setInterval(() => setLoading(false), 1000);
  }, []);

  //* loading component
  if (loading) {
    return (
      <div className="h-[80vh] ">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Cover />
      <div className="center mb-8">
        <div className="w-[78%] max-lg:w-[95%] max-md:center my-4 pt-6 relative">
          <img
            src={asset.ellipse}
            alt=""
            className="absolute size-20 -z-10 max-md:size-14 -left-10 max-md:left-4"
          />
          <h1 className="text-5xl font-bold max-md:text-3xl max-sm:text-xl pb-20 max-md:pb-6">
            Événements en replay
          </h1>
          <div className="flex justify-around max-lg:flex-col">
            <div className="w-[400px] max-lg:hidden pt-2 flex flex-col gap-8 ">
              <div className="bg-primary-color text-white font-medium p-4 w-full flex items-center">
                Filter par:
              </div>
              <div
                onClick={() => location.reload()}
                className="text-primary-orange tracking-wide underline cursor-pointer"
              >
                Réinitialiser
              </div>

              <div className="">
                <span
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="font-bold tracking-wide flex items-center gap-2 hover:underline cursor-pointer"
                >
                  {isCategoryOpen ? (
                    <GoTriangleDown size={20} />
                  ) : (
                    <GoTriangleRight size={20} />
                  )}
                  CATÉGORIES
                </span>
                {isCategoryOpen ? (
                  <div className="flex flex-col gap-4 m-3 text-gray-800">
                    {tags?.map((tag) => (
                      <div key={tag._id} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          className="size-4"
                          id={tag._id}
                          onChange={(e) =>
                            handleCheckTags(e.target.checked, tag._id)
                          }
                        />
                        <label htmlFor={tag._id}>{tag.title} </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <span
                  onClick={() => setIsOrateurOpen(!isOrateurOpen)}
                  className="font-bold tracking-wide flex items-center gap-2 hover:underline cursor-pointer"
                >
                  {isOrateurOpen ? (
                    <GoTriangleDown size={20} />
                  ) : (
                    <GoTriangleRight size={20} />
                  )}
                  ORATEURS
                </span>
                {isOrateurOpen ? (
                  <div className="flex flex-col gap-4 m-3 text-gray-800">
                    {personOfInterests?.map((person) => (
                      <div key={person._id} className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          className="size-4"
                          id={person._id}
                          onChange={(e) =>
                            handleCheckPois(e.target.checked, person._id)
                          }
                        />
                        <label htmlFor={person._id}>
                          {person.civility} {person.firstname} {person.lastname}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="px-2 flex justify-end">
              <div
                className="bg-primary-color rounded max-lg:flex items-center gap-2 max-sm:text-sm hidden text-white font-medium p-4 cursor-pointer"
                onClick={() => setIsFilterOpen(true)}
              >
                <FaFilter />
                <p>Filtrer les résultats</p>
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 pt-0 max-md:w-full ">
              {events?.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Partners />

      {/* filter side */}
      {isFilterOpen && (
        <div
          id="sideBarFilter"
          onClick={handleClose}
          className="fixed inset-0 bg-black bg-opacity-50 hidden max-lg:block"
        >
          <div className="bg-white min-w-[60%] max-lg:w-[40%] h-full overflow-auto">
            <div className="bg-primary-color text-white font-medium p-4 w-full flex justify-between items-center">
              <span>Filter par:</span>
              <IoMdClose
                className="cursor-pointer"
                onClick={() => setIsFilterOpen(false)}
              />
            </div>
            <div
              className="text-primary-orange tracking-wide underline p-4 cursor-pointer"
              onClick={() => location.reload()}
            >
              Réinitialiser
            </div>

            <span className="font-bold tracking-wide p-4 ">CATÉGORIES</span>
            <div className="flex flex-col gap-4 m-3 text-gray-700">
              {tags?.map((tag) => (
                <div key={tag._id} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-4"
                    id={tag._id}
                    onChange={(e) => handleCheckTags(e.target.checked, tag._id)}
                  />
                  <label htmlFor={tag._id}> {tag.title} </label>
                </div>
              ))}
            </div>

            <span className="font-bold tracking-wide p-4 flex items-center gap-2">
              ORATEURS
            </span>
            <div className="flex flex-col gap-4 m-3 text-gray-800">
              {personOfInterests?.map((person) => (
                <div key={person._id} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="size-4"
                    id={person._id}
                    onChange={(e) =>
                      handleCheckPois(e.target.checked, person._id)
                    }
                  />
                  <label htmlFor={person._id}>
                    {person.civility} {person.firstname} {person.lastname}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventReplays;
