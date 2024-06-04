import {Link} from "react-scroll"

const Welcome = () => {

  return (
    <div id="hero" className=" pt-[2rem] lg:pt-[4rem] px-4 md:px-[4rem] bg-center bg-cover min-h-screen w-full bg-sky-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 py-16">
        <div className="space-y-5 order-2 lg:order-1">
          <h1 className="text-slate-100 text-2xl text-opacity-80">
            {'Bienvenue sur mon portfolio'}
          </h1>
          <div className="div">
            <span className="text-slate-100 text-3xl md:text-4xl font-bold ">
              {'Je suis développeur Web Fullstack expert en'}{' '}
            </span>
            <span className="text-sky-400 text-4xl font-bold ">
              {'ReactJs, NextJs, Laravel & TailwindCss'}{' '}
            </span>
          </div>
          <div className="text-slate-100 text-opacity-80 uppercase italic font-light">
            <p className="">{"+4 ans d'expérience professionnelle"}</p>
            <p className="">{"L'excellence est ma priorité"}</p>
            <p className="">{"Ensemble, réalisons l'extraordinaire"}</p>
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={800}
              className="bg-sky-500 text-white rounded px-4 py-3 transition duration-300 ease-in-out hover:bg-sky-900 cursor-pointer"
            >
              {'Contactez-moi'}
            </Link>

            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-40}
              duration={800}
              className="bg-orange-500 text-white rounded px-4 py-3 transition duration-300 ease-in-out hover:bg-sky-900 cursor-pointer"
            >
              {'Voir mes projets'}
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img src="/mock-up.jpg" alt="mokup" className=" w-full md:w-[70%] lg:w-full mx-auto " />
        </div>
      </div>
    </div>
  )
}

export default Welcome
