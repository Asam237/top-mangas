import { Poppins } from "@next/font/google";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Input, MySelect, TextArea } from "../components/input";
import Dekupng from "../assets/images/deku.png"
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: "400" })
export default function AddManga() {
    return (
        <>
            <Head>
                <title>Top Mangas</title>
                <meta name="description" content="Top mangas apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <div className="py-8 lg:py-20 mx-4 lg:mx-0">
                    <div className="container mx-auto">
                        <div className="flex flex-col">
                            <h1 className={`${poppins.className} text-white text-center lg:text-left link text-4xl`}>Participate and add your manga here</h1>
                            <p className={`link pt-4 ${poppins.className} text-center lg:text-left`}>Make sure to fill the form well before submitting please.</p>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-1/2">
                                <div className="gap-10 mt-10">
                                    <Input label="title" />
                                </div>
                                <div className="gap-10 mt-10">
                                    <TextArea label="description" />
                                </div>
                                <div className="gap-10 mt-10">
                                    <MySelect label="Tags" />
                                </div>
                                <div className="gap-10 mt-14">
                                    <a href="#valider"><button className={`lg:mt-0  bg-white rounded-lg font-bold px-6 w-full py-4 text-black flex items-center justify-center ${poppins.className}`}>Valider</button></a>
                                </div>
                            </div>
                            <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                                <Image className="w-3/4 h-auto" src={Dekupng} alt="deku" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}