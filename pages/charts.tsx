import Head from "next/head"
import DoughnutChart from "../components/charts"
import LineChart from "../components/charts"
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
                <div className="py-4 lg:py-20 mx-4 lg:mx-0">
                    <div className="container mx-auto">
                        {/* <DoughnutChart /> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}