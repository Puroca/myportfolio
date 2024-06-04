import { FaBook } from "react-icons/fa"

const MainLoader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center text-orange-400 fixed  text-6xl animate-pulse">
        <FaBook />
    </div>
  )
}

export default MainLoader