import { useEffect, useState } from "react";
import { asset } from "../assets/asset.js";
import { IoIosMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/api/userApiSLice.js";
import { logout } from "../redux/features/auth/authSlice.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="flex w-full items-center justify-between px-4 select-none">
        <Link to={"/"} className="">
          <img src={asset.RMA_logo} alt="logo" />
        </Link>
        <div className="max-xl:hidden block">
          <ul className="flex gap-10 font-normal text-lg text-gray-500">
            <Link
              to={"/"}
              className={`li-hover ${
                pathname === "/"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Accueil
            </Link>
            <Link
              to={"/agenda"}
              className={`li-hover ${
                pathname === "/agenda"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Événements à venir
            </Link>
            <Link
              to={"/replays"}
              className={`li-hover ${
                pathname === "/replays"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Événements en replay
            </Link>
            <Link
              to={"/contact"}
              className={`li-hover ${
                pathname === "/contact"
                  ? "text-primary-color font-bold border-b-2 border-primary-color"
                  : ""
              } `}
            >
              Contact
            </Link>
          </ul>
        </div>
        {user ? (
          <>
            <div
              className="max-xl:hidden block mr-4 cursor-pointer relative"
              onClick={() => setIsOpenProfile(!isOpenProfile)}
            >
              <div className="flex items-center gap-2">
                <FaUser className="text-secondary-blue size-4" />
                <span className="text-primary-color font-bold text-lg">
                  {user.nom.toUpperCase()} {user.prenom}
                </span>
                <MdExpandMore className="text-secondary-blue size-8" />
              </div>
            </div>
            {!isOpenProfile ? (
              ""
            ) : (
              <>
                <div className="max-xl:hidden absolute right-10 top-20 border bg-white z-10 center w-[200px] h-auto shadow-md flex flex-col font-medium text-lg text-gray-500">
                  <Link
                    onClick={() => setIsOpenProfile(false)}
                    to={"/profile"}
                    className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Mon profile
                  </Link>
                  {user.admin && (
                    <Link
                      onClick={() => setIsOpenProfile(false)}
                      to={"/admin"}
                      className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                    >
                      Admin menu
                    </Link>
                  )}

                  {user.pois && (
                    <Link
                      onClick={() => setIsOpenProfile(false)}
                      to={"/mon-events"}
                      className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                    >
                      Mon events
                    </Link>
                  )}

                  <div
                    onClick={() => {
                      setIsOpenProfile(false);
                      handleLogout();
                    }}
                    className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Deconnexion
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="max-xl:hidden block">
            <Link
              to={"/login"}
              className="bg-primary-color center font-medium text-lg text-white py-3 px-3 rounded-full button-hover"
            >
              Connexion / Creer un compte
            </Link>
          </div>
        )}

        <div className="max-xl:block hidden pr-2">
          <IoIosMenu
            className="size-9 text-primary-color cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          {isOpen ? (
            <>
              <div className="absolute border shadow-md w-[360px] h-auto right-0 top-[90px] z-10 bg-white ">
                <ul className="flex flex-col font-medium text-lg text-gray-500">
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Accueil
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/agenda"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Événements à venir
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/replays"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Événements en replay
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={"/contact"}
                    className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                  >
                    Contact
                  </Link>
                  {user ? (
                    <>
                      <Link
                        onClick={() => setIsOpenProfile(false)}
                        to={"/profile"}
                        className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                      >
                        Mon profile
                      </Link>
                      {user.admin && (
                        <Link
                          onClick={() => setIsOpenProfile(false)}
                          to={"/admin"}
                          className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                        >
                          Admin menu
                        </Link>
                      )}
                      {user.pois && (
                        <Link
                          onClick={() => setIsOpenProfile(false)}
                          to={"/mon-events"}
                          className="w-full py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                        >
                          Mon events
                        </Link>
                      )}
                      <div
                        onClick={() => {
                          setIsOpenProfile(false);
                          handleLogout();
                        }}
                        className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                      >
                        Deconnexion
                      </div>
                    </>
                  ) : (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={"/login"}
                      className="py-2 px-2 hover:bg-gray-100 text-primary-color cursor-pointer border-b "
                    >
                      Connexion / Creer un compte
                    </Link>
                  )}
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
