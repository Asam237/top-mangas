import { Atma, Poppins } from "@next/font/google";
import Image from "next/image";
import { BiStar } from "react-icons/bi"
import { HiOutlineFilm } from "react-icons/hi"

interface ItemProps extends React.AllHTMLAttributes<HTMLElement> {
    title?: string;
    logo?: any;
    description?: string;
    stars?: any;
    tags?: string[]
}
const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Item = ({ title, description, stars, tags, logo, ...props }: ItemProps) => {
    return (
        <div className="border-gray-400 border rounded-lg px-6 py-4 itm">
            <Image className="w-96 h-36 object-contain mx-auto" alt={logo} src={logo} />
            {/* <h4 className={`text-white text-3xl ${atma.className}`}>{title}</h4> */}
            <p className={`text-white leading-6 py-4 text-base ${poppins.className}`}>{description}</p>
            <div className="flex items-center py-4">
                {
                    tags?.map((item, index) => {
                        return (
                            <div key={index}>
                                <div><span className="bg-gray-300 px-6 py-2 rounded-full text-black mr-2">{item}</span></div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex items-center pt-4 pb-8">
                <BiStar className="link mr-4" size={25} />
                <BiStar className="link mr-4" size={25} />
                <BiStar className="link mr-4" size={25} />
            </div>
        </div>
    )
}