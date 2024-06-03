import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import EventsList from "./EventsList";
import { IoIosMenu } from "react-icons/io";

const MyEventsRoute = () => {
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <hr />
      <div className="h-[80vh] flex w-full overflow-hidden select-none">
        <div className="w-1/6 bg-gray-50 h-full border-r max-xl:hidden">
          {/* profile top and left side */}
          <div className="bg-white w-full flex">
            <div className="w-1/3 p-4">
              <img
                src={user.image}
                alt={user.nom}
                className="rounded-full size-16 object-cover border"
              />
            </div>
            <div className="w-2/3 py-4 flex flex-col">
              <Link
                to={"/profile"}
                className="text-primary-color font-medium text-lg"
              >
                Mon profile
              </Link>
              <div className="font-mono">
                {user.titre} {user.prenom} {user.nom}
              </div>
            </div>
          </div>
          {/* events options left and bottom side */}
          <div className="h-full bg-gray-50 text-lg max-xl:hidden">
            <div
              className={`hover:bg-white cursor-pointer w-full h-10 flex items-center px-4 ${
                page === 1 && "bg-white"
              } `}
              onClick={() => setPage(1)}
            >
              mes events
            </div>
            <div
              className={`hover:bg-white cursor-pointer w-full h-10 flex items-center px-4 ${
                page === 2 && "bg-white"
              } `}
              onClick={() => setPage(2)}
            >
              ajouter un event
            </div>
          </div>
        </div>

        <div className="w-5/6 max-xl:w-full h-full relative">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-4 top-5 hidden max-xl:block cursor-pointer"
          >
            <IoIosMenu className="size-6" />
          </div>

          {menuOpen && (
            <>
              <div
                className="bg-white/50 fixed top-0 left-0 w-1/2 h-full"
                onClick={() => setMenuOpen(false)}
              ></div>
              <div className="bg-white border w-1/2 h-full fixed top-0 right-0 flex flex-col text-black shadow-xl">
                <div className="h-[88px] flex items-center px-6 text-xl font-medium">
                  Gestion évents
                </div>
                <ul className="flex flex-col text-lg">
                  <div
                    className={`hover:bg-gray-50 cursor-pointer w-full h-10 flex items-center px-4 border-y ${
                      page === 1 && "bg-white"
                    } `}
                    onClick={() => {
                      setPage(1);
                      setMenuOpen(false);
                    }}
                  >
                    mes events
                  </div>
                  <div
                    className={`hover:bg-gray-50 cursor-pointer w-full h-10 flex items-center px-4 border-b ${
                      page === 2 && "bg-white"
                    } `}
                    onClick={() => {
                      setPage(2);
                      setMenuOpen(false);
                    }}
                  >
                    ajouter un event
                  </div>
                </ul>
              </div>
            </>
          )}

          {page === 1 && <EventsList />}
          {page === 2 && <AddEvent />}
        </div>
      </div>
    </>
  );
};

export default MyEventsRoute;
