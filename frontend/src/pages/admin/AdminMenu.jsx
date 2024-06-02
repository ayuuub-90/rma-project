import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import UserRoute from "./UserRoute";
import EventRoute from "./EventRoute";
import RequestRoute from "./RequestRoute";

const AdminMenu = () => {
  const [page, setPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <hr />
      <div className="h-[80vh] flex w-full">
        <div className="w-1/6 h-full bg-gray-50 text-lg max-xl:hidden">
          <h1 className="text-xl font-medium p-4">Admin menu</h1>
          <div
            className={`hover:bg-white cursor-pointer w-full h-10 flex items-center px-4 ${
              page === 1 && "bg-white"
            } `}
            onClick={() => setPage(1)}
          >
            utilisateurs
          </div>
          <div
            className={`hover:bg-white cursor-pointer w-full h-10 flex items-center px-4 ${
              page === 2 && "bg-white"
            } `}
            onClick={() => setPage(2)}
          >
            évents
          </div>
          <div
            className={`hover:bg-white cursor-pointer w-full h-10 flex items-center px-4 ${
              page === 3 && "bg-white"
            } `}
            onClick={() => setPage(3)}
          >
            demandes
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
                className="bg-white/50 fixed top-0 left-0 w-2/3 h-full"
                onClick={() => setMenuOpen(false)}
              ></div>
              <div className="bg-white border w-1/3 h-full fixed top-0 right-0 flex flex-col text-black ">
                <div className="h-[88px] flex items-center px-6 text-xl font-medium">
                  Admin menu
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
                    utilisateurs
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
                    évents
                  </div>
                  <div
                    className={`hover:bg-gray-50 cursor-pointer w-full h-10 flex items-center px-4 border-b ${
                      page === 3 && "bg-white"
                    } `}
                    onClick={() => {
                      setPage(3);
                      setMenuOpen(false);
                    }}
                  >
                    demandes
                  </div>
                </ul>
              </div>
            </>
          )}

          {page === 1 && <UserRoute />}
          {page === 2 && <EventRoute />}
          {page === 3 && <RequestRoute />}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
