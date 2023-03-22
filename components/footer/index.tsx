import { Poppins } from "@next/font/google"
import Link from "next/link"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Footer = () => {
    return (
        <footer className="pt-32 pb-16">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <p className={`text-white text-center text-sm ${poppins.className}`}>Copyrigth &copy; {new Date().getFullYear()} <Link className="underline" href={"https://abbasali.vercel.app/"}> Abba Sali</Link>, Tous droits reservés.</p>
                    <div className={`text-white text-sm pt-4 lg:pt-0 ${poppins.className}`}>
                        <div className="flex flex-col lg:flex-row">
                            <p>Follow me </p>
                            <div className="flex py-2 lg:py-0">
                                <Link href={"http://github.com/Asam237"} className="lg:ml-4 link">
                                    <AiFillGithub size={25} />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"} className="lg:ml-4 link">
                                    <AiFillLinkedin size={25} />
                                </Link>
                                <Link href={"https://twitter.com/asam_237"} className="lg:ml-4 link">
                                    <AiFillTwitterCircle size={25} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}