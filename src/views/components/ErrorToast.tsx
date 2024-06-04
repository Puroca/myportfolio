
interface ErroProps {
    message: string
}

const ErrorToast = ({message}: ErroProps) => {
  return (
    <div className="p-5 rounded-md bg-red-600 text-white w-full">{message}</div>
  )
}

export default ErrorToast