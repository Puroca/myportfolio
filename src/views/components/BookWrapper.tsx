import { Link } from "react-router-dom";

export interface BookInterface {
    id?: number | string;
    name: string;
    sector: string;
    sectorId?: number | string;
    image: string;
    bookHref: string;
    sectorHref: string;
}

const BookWrapper = ({
    name,
    sector,
    image,
    bookHref,
    sectorHref
}: BookInterface) => {
    return (
        <div className="bg-white w-[145px] md:w-[200px]  lg:w-[216px] shadow-lg hover:shadow-orange-400 mx-auto transition duration-700 ease-in-out">
            <div
                className={` bg-slate-400 h-[230px] md:h-[320px] lg:h-[345px] bg-cover bg-[center center] `}
                style={{ backgroundImage: `url(${image})`, backgroundPosition: "center center" }}
            >
                <Link className="block w-full h-full" to={bookHref}></Link>
            </div>
            <div className="p-3 space-y-2">
                <div className="text-slate-600 hover:underline hover:text-teal-500 text-center text-xs font-medium">
                    <Link to={sectorHref}>{(sector.length > 25)? sector.substring(0, 25)+"...": sector}</Link>
                </div>
                <div className="border-t font-medium hover:underline hover:text-teal-500 text-center">
                    <Link to={bookHref}>{(name.length
                    > 20)? name.substring(0, 20)+"..." : name}</Link>
                </div>
                <div className="border-t text-center font-medium bg-sky-700 text-white text-sm">
                    <Link
                        className="block w-full h-full p-2 px-3 hover:underline"
                        to={bookHref}
                    >{`Ouvrir`}</Link>
                </div>
            </div>
        </div>
    );
};

export default BookWrapper;
