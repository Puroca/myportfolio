import {Link} from "react-scroll"
const About = () => {
  return (
    <div id="about" className="bg-slate-100 py-20 px-3 md:px-[4rem]">
      <div className=" lg:w-[70%] mx-auto bg-sky-950 p-4  md:p-6 text-white  rounded-md ">
        <h1 className="text-3xl font-bold text-slate-100 text-center py-4">
          {' '}
          {'Qui suis-je ?'}{' '}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 text-justify text-opacity-90">
          <div className=" col-span-1 px-3 lg:border-r border-slate-500">
            <img
              src="/profile_gray.jpeg "
              alt=""
              className="rounded-full h-[9rem] w-[9rem] mx-auto border-4 border-white border-opacity-70 "
            />
            <div className="border-b  lg:border-0 border-slate-500 text-opacity-90 text-white text-center text-xs font-semibold space-y-1 pt-3 pb-2 lg:pb-0">
              <p>{'P. Rocherdi AIHOUNDA'} </p>
              <p>{'purocawork@gmail.com'} </p>
              <p>{'+229 912 253 43'} </p>
            </div>
          </div>
          <div className=" col-span-3 space-y-2 pb-3 lg:pl-3 pt-3 lg:pt-0">
            <p>
              {
                "Salut! Je suis un développeur web passionné avec un talent pour créer des applications web dynamiques et réactives. J'ai une solide maîtrise de HTML, CSS, TypeScript et PHP, et je suis compétent avec des frameworks tels que ReactJs, NextJs, Laravel, TailwindCss et ShadCn."
              }
            </p>

            <p>
              {
                "Fort de plusieurs années d'expérience dans le secteur, j'ai développé un sens aigu du détail et un engagement à livrer des sites web de haute qualité et conviviaux. Je m'épanouis dans des environnements collaboratifs et j'apprécie de travailler sur des projets stimulants qui repoussent les limites du développement web."
              }
            </p>
            <p>
              {
                "Lorsque je ne code pas, j'aime explorer de nouvelles technologies et lire des blogs technologiques. Travaillons ensemble pour donner vie à vos idées !"
              }
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
                className="bg-sky-500 hover:bg-sky-800 transition duration-300 ease-in-out text-white rounded px-4 py-3 cursor-pointer"
              >
                {'Contactez-moi'}
              </Link>

              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-40}
                duration={800}
                className="bg-orange-500 hover:bg-sky-800 transition duration-300 ease-in-out text-white rounded px-4 py-3 cursor-pointer"
              >
                {'Voir mes projets'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About