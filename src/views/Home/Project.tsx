import { projects } from './DataBase'
import ProjectCard from '../components/ProjectCard'

const Project = () => {
  return (
    <div id="projects" className="py-16 bg-sky-950  md:px-[4rem] border-t border-slate-500 ">
      <h2 className="text-center text-3xl text-white font-bold pb-8">
        {'Mes Projets Réalisés'}{' '}
      </h2>
      <p className="text-slate-200 pb-6 text-center text-lg px-4">
        {' '}
        {
          "Découvrez une sélection de projets sur lesquels j'ai travaillé, illustrant mon expertise en développement web et mon engagement envers l'excellence "
        }{' '}
      </p>
      <div className="px-[3rem] md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
