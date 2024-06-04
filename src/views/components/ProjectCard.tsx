import { ProjectInterface } from "../Home/Types"

const ProjectCard = ({ name, description, link, image}: ProjectInterface) => {
  return (
    <div className="bg-white p-4 rounded-md flex flex-col justify-between text-sky-950" >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'top center',
        }}
        className=" bg-cover h-[8rem] w-full border-2 border-sky-600 rounded-md shadow-md"
      ></div>
      <h2 className="font-bold text-center border-t mt-4">{name} </h2>
      <p className="text-sm text-center  py-3"> {description} </p>
      <a href={link} target="_blank" className="bg-sky-600 hover:bg-orange-500 text-white rounded text-center w-full block py-2 transition duration-300 ease-in-out">
        {'Ouvrir'}
      </a>
    </div>
  )
}

export default ProjectCard