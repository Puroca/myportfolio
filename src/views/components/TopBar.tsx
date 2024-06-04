import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { useLocation,  } from "react-router-dom";
import {Link} from "react-scroll"

const TopBar = () => {
    const location = useLocation()
    const pathname = location.pathname
    const [currentLink, setcurrentLink] = useState("");

    useEffect(() => {
        setcurrentLink(pathname);
    }, [pathname]);



    return (
      <div className="fixed shadow-xl hidden w-full lg:block  top-0 z-[2000]">
        <div className="bg-sky-950 flex justify-between items-center px-[2rem] py-3">
          <a className="">
            <Link
              to={'hero'}
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
              className="text-xl"
            >
              <img src="/logo_h.png" className="w-[4rem] cursor-pointer" />
            </Link>
          </a>

          <nav className="text-slate-100 text-lg font-medium">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                  className={`hover:underline hover:text-sky-400 cursor-pointer ${
                    currentLink === '/#about' && 'text-sky-400 underline'
                  }`}
                >
                  {' '}
                  {`A propos`}{' '}
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                  className={`hover:underline hover:text-sky-400 cursor-pointer ${
                    currentLink === '/#skills' && 'text-sky-400 underline'
                  }`}
                >
                  {' '}
                  {`Compétences`}
                  {''}
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                  className={`hover:underline hover:text-sky-400 cursor-pointer ${
                    currentLink === '/#projects' && 'text-sky-400 underline'
                  }`}
                >
                  {' '}
                  {`Projets`}{' '}
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                  className={`hover:underline hover:text-sky-400 cursor-pointer ${
                    currentLink === '/#contact' && 'text-sky-400 underline'
                  }`}
                >
                  {' '}
                  {`Contact`}{' '}
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href={'/profile_gray.jpeg'}
            download={'profile_gray.jpeg'}
            className="bg-sky-500 hover:bg-orange-500 px-4 flex items-center space-x-1 text-white rounded text-center  py-2 transition duration-300 ease-in-out"
          >
            <LuDownload />
            <p>{'Télécharger mon CV'}</p>
          </a>
        </div>
      </div>
    )
};

export default TopBar;
