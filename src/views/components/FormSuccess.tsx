
interface SuccessProps {
    message?: string
}


const FormSuccess = ({message}:SuccessProps) => {
  if (!message) {
      return <></>;
  }
  return (
      <div className="w-full bg-white text-green-500 p-2 rounded-md">
          {message}
      </div>
  );
}

export default FormSuccess