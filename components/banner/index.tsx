import { Atma, Poppins } from "@next/font/google"

const atma = Atma({ subsets: ['latin'], weight: "400" })
const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const Banner = () => {
    return (
        <div className="py-4 lg:py-20 mx-4 lg:mx-0">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <h1 className={`${atma.className} text-3xl lg:text-6xl mx-auto text-center lg:w-2/5 text-white`}>The Top Mangas Of The New Ara</h1>
                    <p className={`${poppins.className} pt-8 text-center lg:w-3/6 leading-7 mx-auto text-white`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa dolor eaque facilis numquam obcaecati sapiente, sunt totam vitae? Blanditiis eligendi, et facilis laboriosam nobis quam saepe sapiente similique velit.</p>
                    <button className={`bg-white sm:w-1/3 mx-auto mt-6 lg:mt-10 rounded-lg font-bold px-6 py-4 text-black ${poppins.className}`}>Vote a manga</button>
                </div>
            </div>
        </div>
    )
}