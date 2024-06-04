
const Skills = () => {
  return (
    <div id="skills" className="bg-sky-950 text-white py-12">
      <h2 className="text-center font-bold text-3xl pb-4">
        {'Mes Compétences'}
      </h2>
      <p className="text-center text-slate-300 text-xl pb-6">
        {
          'Voici les frameworks et langages que je maitrise et utilise pour développer des solutions innovantes :'
        }
      </p>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/react.png"
              className="h-[6rem] w-auto bg-cover bg-center"
            />
            <p className="font-medium"> {'ReactJs'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/laravel.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'Laravel'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/next.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'NextJs'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/tailwind.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'TailwindCss'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/html.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'HTML'} </p>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/css.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'CSS'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/typescript.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'TypeScript'} </p>
          </div>

          <div className="flex flex-col space-y-3 justify-center items-center">
            <img
              src="/php.png"
              className="h-[6rem] w-auto bg-cover bg-center rounded-md"
            />
            <p className="font-medium"> {'PHP'} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills