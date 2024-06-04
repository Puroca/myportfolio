interface SuccessProps {
    message: string
}
const SuccessToast = ({message}: SuccessProps) => {
    return (
        <div className="p-5 rounded-md bg-green-600 text-white w-full">{message}</div>
    );
};

export default SuccessToast;
