import { Atma, Poppins } from "@next/font/google"
import Link from "next/link"
import { BiMoney, BiStats} from "react-icons/bi"

const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                    <Link href={"/"} className={`${atma.className} text-4xl font-bold text-white`}>TopMangas</Link>
                    <nav>
                        <ul className="flex flex-col lg:flex-row">
                            <li className="flex items-center justify-center pt-2 lg:pt-0">
                                <BiMoney color="white" size={30} />
                                <Link href={"#makedonation"} className={`${poppins.className} ml-2 text-base text-white hover:underline`}>Make a donation</Link>
                            </li>
                            <li>
                                <button className={`mt-4 lg:mt-0 lg:ml-4 bg-white rounded-lg font-bold px-6 py-4 text-black flex items-center justify-center ${poppins.className}`}> <BiStats size={25} className="mr-2" /> Voir le graphe</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}