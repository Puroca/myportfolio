import { Link } from "react-router-dom";

interface CardProps {
    cardTitle: string;
    children: React.ReactNode;
    switcher: boolean;
    switcherMessage: string;
    switcherLink: string;
    switcherLabel: string;
    // errMsg: string
}

const AuthCardWrapper = ({
    cardTitle,
    children,
    switcher,
    switcherMessage,
    switcherLink,
    switcherLabel,    
}: CardProps) => {
    return (
        <div className="p-4 md:p-6 rounded-lg border shadow space-y-4 w-full md:w-[450px] mx-auto bg-slate-100">
            {/* Card title */}
            <h1 className="text-xl font-bold text-teal-600">{cardTitle} </h1>

            {/* Card content */}
            <div className="">{children}</div>

            {/* card Footer */}
           {switcher &&( <div className="text-slate-600">
                {switcherMessage} <Link className="underline hover:text-teal-600" to={switcherLink}>{switcherLabel} </Link>
            </div>)}
        </div>
    );
};

export default AuthCardWrapper;
