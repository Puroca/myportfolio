import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { LuDownload, LuMenuSquare,} from "react-icons/lu";
import { useLocation } from "react-router-dom";
import {Link} from "react-scroll"
import { useEffect, useState } from "react";

const MobileMenu = () => {
    const location = useLocation();
    const [activeLink, setactiveLink] = useState<string>("");
    useEffect(() => {
        const currentPath = location.pathname;

        setactiveLink(currentPath);
    }, [location]);

    
    return (
      <div className="lg:hidden fixed top-0 w-full z-[999] ">
        <div className="flex items-center bg-sky-950 shadow-xl p-3 pb-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-3xl outline-none">
                <LuMenuSquare className="text-white" strokeWidth={1} />
              </button>
            </SheetTrigger>
            <SheetContent className="z-[1300] w-[90%] p-0 pt-16 " side={'left'}>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b  hover:text-white w-full text-start ${
                  activeLink == '' && 'bg-sky-500 text-white'
                }`}
              >
                <Link
                  className=" block p-3 w-full"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                >
                  {'Accueil'}
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b hover:text-white w-full text-start ${
                  activeLink == '/services' && 'bg-sky-500 text-white'
                }`}
              >
                <Link
                  className=" block p-3 w-full"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                >
                  {'A propos'}
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b hover:text-white w-full text-start ${
                  activeLink.startsWith('/contact') && 'bg-sky-500 text-white'
                }`}
              >
                <Link
                  className=" block p-3 w-full"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                >
                  {'Compétences'}
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b hover:text-white w-full text-start ${
                  activeLink.startsWith('/about') && 'bg-sky-500 text-white'
                }`}
              >
                <Link
                  className=" block p-3 w-full"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                >
                  {'Projets'}
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b hover:text-white w-full text-start ${
                  activeLink.startsWith('/about') && 'bg-sky-500 text-white'
                }`}
              >
                <Link
                  className=" block p-3 w-full"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={800}
                >
                  {'Contact'}
                </Link>
              </SheetClose>
              <SheetClose
                asChild
                className={`hover:bg-sky-950 border-b hover:text-white w-full text-start ${
                  activeLink.startsWith('/about') && 'bg-sky-500 text-white'
                }`}
              >
                <a
                  href={'/profile_gray.jpeg'}
                  download={'profile_gray.jpeg'}
                  className="bg-sky-950 hover:bg-orange-500 w-max mt-3 mx-auto px-4 flex items-center space-x-1 text-white rounded text-center  py-2 transition duration-300 ease-in-out"
                >
                  <LuDownload />
                  <p>{'Télécharger mon CV'}</p>
                </a>
              </SheetClose>
            </SheetContent>
          </Sheet>
          <Link
            to={'/'}
            className="-space-y-[2px] w-full text-2xl flex justify-center font-medium text-orange-300 space-x-2"
          >
            <p className="text-xl">
              <img src="/logo_h.png" className="w-[4rem]" />
            </p>
          </Link>
        </div>
      </div>
    )
};

export default MobileMenu;
