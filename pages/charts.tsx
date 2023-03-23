import Head from "next/head"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

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
                <p>Main Here</p>
            </main>
            <Footer />
        </>
    )
}