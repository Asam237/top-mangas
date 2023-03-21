import { Atma, Poppins } from "@next/font/google"
import Link from "next/link"
import { BiMoney } from "react-icons/bi"

const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                    <Link href={"/"} className={`${atma.className} text-4xl font-bold text-white`}>TopMangas</Link>
                    <nav>
                        <ul>
                            <li className="flex items-center justify-center pt-2 lg:pt-0">
                                <BiMoney size={30} />
                                <Link href={"#makedonation"} className={`${poppins.className} ml-2 text-base text-white`}>Make a donation</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}