import { Atma, Poppins } from "@next/font/google";
import { BiStar } from "react-icons/bi"
import {HiOutlineFilm} from "react-icons/hi"

interface ItemProps extends React.AllHTMLAttributes<HTMLElement> {
    title?: string;
    description?: string;
    stars?: string
}
const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Item = ({ title, description, stars, ...props }: ItemProps) => {
    return (
        <div className="border rounded-lg px-6 py-4">
            <HiOutlineFilm color="white" size={60} className="my-4" />
            <h4 className={`text-white text-3xl ${atma.className}`}>{title}</h4>
            <p className={`text-white leading-6 py-4 text-base ${poppins.className}`}>{description}</p>
            <div className="flex items-center pt-4 pb-8">
                <BiStar color="white" size={25} className="mr-4" />
                <BiStar color="white" size={25} className="mr-4" />
                <BiStar color="white" size={25} className="mr-4" />
                <BiStar color="white" size={25} className="mr-4" />
            </div>
        </div>
    )
}