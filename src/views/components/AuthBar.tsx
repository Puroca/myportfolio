import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const AuthBar = () => {
  const location = useLocation();
  const [activeLink, setactiveLink] = useState<string>("");
  useEffect(() => {
      const currentPath = location.pathname;

      setactiveLink(currentPath);
  }, [location]);
  return (
      <div className="bg-teal-600 hidden lg:flex justify-between fixed top-0 w-full px-[4rem] py-4">
          <div className="">
              <Link
                  to={""}
                  className="w-full text-2xl flex justify-center font-medium text-orange-300 space-x-2 -space-y-[2px] "
              >
                  <FaBook className="" />
                  <p className="text-xl">{`Filières Techniques`}</p>
              </Link>
          </div>
          <nav className="text-teal-100 font-medium">
              <ul className="flex items-center space-x-5">
                  <li
                      className={
                          activeLink === "/"
                              ? `underline text-white hover:underline hover:text-white`
                              : `hover:underline hover:text-white`
                      }
                  >
                      <Link to={"/"}>{`Accueil`}</Link>
                  </li>
                  <li
                      className={
                          activeLink === "/auth/signup"
                              ? `underline text-white hover:underline hover:text-white`
                              : `hover:underline hover:text-white`
                      }
                  >
                      <Link to={"/auth/signup"}>{`Inscription`}</Link>
                  </li>
                  <li
                      className={
                          activeLink === "/auth/login"
                              ? `underline text-white hover:underline hover:text-white`
                              : `hover:underline hover:text-white`
                      }
                  >
                      <Link to={"/auth/login"}>{`Connexion`}</Link>
                  </li>
              </ul>
          </nav>
      </div>
  );
}

export default AuthBar