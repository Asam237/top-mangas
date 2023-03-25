import { Poppins } from "@next/font/google";
import Head from "next/head";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Input, MySelect, TextArea } from "../components/input";
import Dekupng from "../assets/images/deku.png"
import Image from "next/image";
import { useRouter } from "next/router"
import { db, storage } from "../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const poppins = Poppins({ subsets: ['latin'], weight: "400" })
export default function AddManga() {
    const navigate = useRouter();
    const [title, setTitle] = useState("");
    const [file, setFile]: any = useState(null);
    const [description, setDescription] = useState("");
    const [data, setData]: any = useState([])
    const handleAdd = async (e: any) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
                logo: "",
                title: title,
                description: description,
                last: "Turing",
                timeStamp: serverTimestamp(),
                born: 1912
            });
            const id = docRef.id;
            console.log("Document written with ID: ", docRef.id);
            setData({ ...data, [id]: docRef.id })
            navigate.push("/")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
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
                        <form onSubmit={handleAdd}>
                            <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2">
                                    <div className="gap-10 mt-10">
                                        <Input onChange={(e) => setTitle(e.target.value)} label="title" />
                                    </div>
                                    <div className="gap-10 mt-10">
                                        <TextArea label="description" onChange={(e) => setDescription(e.target.value)} />
                                    </div>
                                    <div className="gap-10 mt-10">
                                        <MySelect label="Tags" />
                                    </div>
                                    <div className="gap-10 mt-10">
                                        <input onChange={(e: any) => setFile(e.target.files[0])} className="block w-full text-base cursor-pointer link h-10" id="file_input" type="file" />
                                    </div>
                                    <div className="gap-10 mt-14">
                                        <button type="submit" className={`lg:mt-0  bg-white rounded-lg font-bold px-6 w-full py-4 text-black flex items-center justify-center ${poppins.className}`}>Valider</button>
                                    </div>
                                </div>
                                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                                    <Image className="w-3/4 h-auto" src={Dekupng} alt="deku" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}