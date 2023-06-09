import { Atma, Poppins } from "@next/font/google"
import Link from "next/link"
import { BiStats, BiCoffee, BiBot } from "react-icons/bi"
import { HiLightBulb } from "react-icons/hi"
import { useEffect, useState } from 'react'

const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Header = () => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <header className={`py-8 ${theme} sticky top-0 left-0 z-40`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between border-b pb-6 blink">
                    <div className="flex justify-center flex-row items-center">
                        <BiBot size={35} className="mr-2 link" />
                        <Link href={"/"} className={`${atma.className} text-4xl font-bold text-white link`}>
                            TopMangas
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex flex-col lg:flex-row items-center">
                            <li className="hidden lg:flex items-center justify-center pt-6 lg:pt-0">
                                <BiCoffee className="link" size={30} />
                                <Link href={"https://www.buymeacoffee.com/abbasaliab3"} className={`${poppins.className} ml-2 text-base text-white hover:underline link`}>buy me a coffee</Link>
                            </li>
                            <li className="hidden lg:flex">
                                <Link href="/charts"><button className={`mt-6 lg:mt-0 lg:ml-4 bg-white rounded-lg font-bold px-6 py-4 text-black flex items-center justify-center ${poppins.className}`}> <BiStats size={25} className="mr-2" /> Voir le graphe</button></Link>
                            </li>
                            <li>
                                <HiLightBulb className="mt-6 lg:mt-0 lg:ml-4 link cursor-pointer" onClick={toggleTheme} size={30} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}