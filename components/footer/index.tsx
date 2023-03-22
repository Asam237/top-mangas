import { Poppins } from "@next/font/google"
import Link from "next/link"
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Footer = () => {
    return (
        <footer className="pt-32 pb-16">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <div className={`text-white text-center text-sm ${poppins.className}`}>Copyrigth &copy; {new Date().getFullYear()} Abba Sali, Tous droits reservés.</div>
                    <div className={`text-white text-sm pt-4 lg:pt-0 ${poppins.className}`}>
                        <div className="flex flex-col lg:flex-row">
                            <p>Follow me </p>
                            <div className="flex py-2 lg:py-0">
                                <Link href={"http://github.com/Asam237"} className="lg:ml-4">
                                    <AiFillGithub size={25} />
                                </Link>
                                <Link href={"https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"} className="lg:ml-4">
                                    <AiFillLinkedin size={25} />
                                </Link>
                                <Link href={"https://twitter.com/asam_237"} className="lg:ml-4">
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