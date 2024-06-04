

interface ErrorProps {
    message?: string | null
}


const FormError = ({message}: ErrorProps) => {
    if(!message){
        return <></>
    }
  return (
    <div className="w-full bg-white text-red-500 p-2 rounded-md">
        {message}
    </div>
  )
}

export default FormError