import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { BiError } from "react-icons/bi"
import { Atma } from "@next/font/google"

const atma = Atma({ subsets: ['latin'], weight: "400" })

export default function Chart() {
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
                <div className="py-8 lg:py-40 mx-4 lg:mx-0">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <BiError className="link" size={200} />
                            <p className={`link ${atma.className} text-4xl pt-8`}>En cours de creation..</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}